import { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonFooter,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  IonBackButton,
  IonList,
  IonItem,
  IonChip,
  IonListHeader,
  IonGrid,
  IonRow,
  IonCol,
  useIonPopover,
  IonCheckbox,
  IonIcon,
  IonTextarea,
  IonLabel,
  IonSearchbar,
  useIonModal,
} from '@ionic/react';
import { add, close } from 'ionicons/icons';
import greekUtils from 'greek-utils';

import { RouteComponentProps } from 'react-router-dom';
import { allFeelings } from '../components/feelings';

const PopoverList: React.FC<{
  onHide: () => void;
}> = ({ onHide }) => (
  <IonList>
    <IonItem button>Αλλαγή Ημερομηνίας</IonItem>
  </IonList>
);

const Feelings: React.FC<{
  feelings: String[];
  addFeeling: (a: string) => void;
  removeFeeling: (a: string) => void;
  onDismiss: () => void;
}> = ({ feelings, onDismiss, addFeeling, removeFeeling }) => {
  const happyF = allFeelings.happy;
  const sadF = allFeelings.sad;
  const [searchText, setSearchText] = useState('');

  const filterOut = (a: string) => {
    if (searchText === '') return true;
    return greekUtils.sanitizeDiacritics(a).toUpperCase().includes(greekUtils.sanitizeDiacritics(searchText).toUpperCase());
  };

  return (
    <div>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Προσθήκη Συναισθημάτων</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={onDismiss}>ΚΛΕΙΣΙΜΟ</IonButton>
          </IonButtons>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar
            value={searchText}
            placeholder="Αναζήτηση"
            onIonChange={(e) => setSearchText(e.detail.value!)}
          ></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonListHeader
            style={{
              fontSize: '1rem',
              fontWeight: 700,
            }}
          >
            Οταν ΔΕΝ καλύπτονται οι ανάγκες μου
          </IonListHeader>
          {sadF
            .filter(({ val }) => filterOut(val))
            .map(({ val, isChecked }, i) => (
              <IonItem key={i}>
                <IonLabel>{val}</IonLabel>
                <IonCheckbox
                  slot="end"
                  value={val}
                  checked={isChecked}
                  onIonChange={(e) => (e.detail.checked ? addFeeling(val) : removeFeeling(val))}
                />
              </IonItem>
            ))}
          <IonListHeader
            style={{
              fontSize: '1rem',
              fontWeight: 700,
            }}
          >
            Οταν καλύπτονται οι ανάγκες μου
          </IonListHeader>
          {happyF
            .filter(({ val }) => filterOut(val))
            .map(({ val, isChecked }, i) => (
              <IonItem key={i}>
                <IonLabel>{val}</IonLabel>
                <IonCheckbox
                  slot="end"
                  value={val}
                  checked={isChecked}
                  onIonChange={(e) => (e.detail.checked ? addFeeling(val) : removeFeeling(val))}
                />
              </IonItem>
            ))}
        </IonList>
      </IonContent>
    </div>
  );
};

interface ThoughtPageProps extends RouteComponentProps {
  match: any;
}
const Thought: React.FC<ThoughtPageProps> = ({ match, history, location }) => {
  const id = match.params.id || '';
  const [presentPop, dismissPop] = useIonPopover(PopoverList, { onHide: () => dismiss() });
  const [viewOnly, setViewOnly] = useState(false);

  const [feelings, setFeelings] = useState<String[]>([]);
  const [description, setDescription] = useState('');
  const [thoughts, setThoughts] = useState('');
  const [acted, setActed] = useState('');

  const addFeeling = (a: string) => {
    setFeelings([...feelings, a]);
  };

  const removeFeeling = (a: string) => {
    let temp = feelings.filter((f) => f !== a);
    setFeelings(temp);
  };

  const handleDismiss = () => {
    dismiss();
  };

  const [present, dismiss] = useIonModal(Feelings, {
    feelings: feelings,
    onDismiss: handleDismiss,
    addFeeling: addFeeling,
    removeFeeling: removeFeeling,
  });

  const saveThoughts = () => {
    let temp = localStorage.getItem('myThoughts');
    let myThoughts = [];
    if (temp) {
      myThoughts = JSON.parse(temp);
    }
    myThoughts.push({ date: new Date(), feelings: feelings, description: description, thoughts: thoughts, acted: acted });
    localStorage.setItem('myThoughts', JSON.stringify(myThoughts));
    history.replace('/');
  };

  useEffect(() => {
    const temp = localStorage.getItem('myThoughts');
    if (temp) {
      const thought = JSON.parse(temp);
      if (id) {
        setViewOnly(true);
        setDescription(thought[id].description);
        setActed(thought[id].acted);
        setFeelings(thought[id].feelings);
        setThoughts(thought[id].thoughts);
      }
    }
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>{id ? 'Προβολή Συμβάντος' : 'Προσθήκη Συμβάντος'}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonLabel>Συναισθήματα</IonLabel>
          </IonRow>
          <IonRow>
            {feelings &&
              feelings.map((f, i) => (
                <IonChip key={i}>
                  <IonLabel>{f}</IonLabel>
                  {!viewOnly && <IonIcon icon={close} />}
                </IonChip>
              ))}
            {!viewOnly && (
              <IonChip color="primary" onClick={() => present()}>
                <IonLabel>Προσθήκη</IonLabel>
                <IonIcon icon={add} />
              </IonChip>
            )}
          </IonRow>

          <>
            <IonRow>
              <IonLabel>Αυτόματες Σκέψεις</IonLabel>
            </IonRow>
            <IonRow>
              <IonTextarea
                rows={4}
                cols={20}
                placeholder={viewOnly ? '' : 'Τι μου πέρασε απο το μυαλό;'}
                value={thoughts}
                onIonChange={(e) => setThoughts(e.detail.value!)}
                readonly={viewOnly}
              ></IonTextarea>
            </IonRow>
          </>
          <>
            <IonRow>
              <IonLabel>Συμβαν</IonLabel>
            </IonRow>
            <IonRow>
              <IonTextarea
                rows={12}
                cols={20}
                placeholder={viewOnly ? '' : 'Περιγραφή συμβάντος...'}
                value={description}
                onIonChange={(e) => setDescription(e.detail.value!)}
                readonly={viewOnly}
              ></IonTextarea>
            </IonRow>
          </>
          <>
            <IonRow>
              <IonLabel>Αντίδραση</IonLabel>
            </IonRow>
            <IonRow>
              <IonTextarea
                rows={2}
                cols={20}
                placeholder={viewOnly ? '' : 'Τι έκανα;'}
                value={acted}
                onIonChange={(e) => setActed(e.detail.value!)}
                readonly={viewOnly}
              ></IonTextarea>
            </IonRow>
          </>
        </IonGrid>
      </IonContent>

      {!viewOnly && (
        <IonFooter>
          <IonToolbar>
            <IonButton expand="full" onClick={() => saveThoughts()}>
              ΑΠΟΘΗΚΕΥΣΗ
            </IonButton>
          </IonToolbar>
        </IonFooter>
      )}
    </IonPage>
  );
};

export default Thought;
