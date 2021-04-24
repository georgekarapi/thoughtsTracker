import React, { useState, useEffect } from 'react';
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
import { Feeling, allFeelings } from '../components/feelings';

export interface ThoughtInterface {
  date: Date;
  description: string;
  feelings: Feeling[];
  thoughts: string;
  acted: string;
}

const PopoverList: React.FC<{
  onHide: () => void;
}> = ({ onHide }) => (
  <IonList>
    <IonItem button>Αλλαγή Ημερομηνίας</IonItem>
  </IonList>
);

const Feelings: React.FC<{
  feelings: Feeling[];
  addFeeling: (a: Feeling) => void;
  removeFeeling: (a: Feeling) => void;
  onDismiss: () => void;
}> = ({ feelings, onDismiss, addFeeling, removeFeeling }) => {
  const magicNumber = 94;
  const sadF = allFeelings.slice(0, magicNumber).map((f) => ({ ...f, isChecked: feelings.some((c) => c.id === f.id) }));
  const happyF = allFeelings
    .slice(magicNumber, allFeelings.length)
    .map((f) => ({ ...f, isChecked: feelings.some((c) => c.id === f.id) }));
  const [searchText, setSearchText] = useState('');

  const addF = (item: Feeling) => {
    if (item.mood === 'sad') {
      sadF[item.id].isChecked = true;
    } else {
      happyF[item.id - magicNumber].isChecked = true;
    }
    addFeeling(item);
  };

  const removeF = (item: Feeling) => {
    if (item.mood === 'sad') {
      sadF[item.id].isChecked = false;
    } else {
      happyF[item.id - magicNumber].isChecked = false;
    }
    removeFeeling(item);
  };

  const filterOut = (a: string) => {
    if (searchText === '') return true;
    return greekUtils.sanitizeDiacritics(a).toUpperCase().includes(greekUtils.sanitizeDiacritics(searchText).toUpperCase());
  };

  return (
    <React.Suspense fallback={null}>
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
            .map((feeling) => (
              <IonItem key={feeling.id}>
                <IonLabel>{feeling.val}</IonLabel>
                <IonCheckbox
                  slot="end"
                  value={feeling.val}
                  checked={feeling.isChecked}
                  onIonChange={(e) => (e.detail.checked ? addF(feeling) : removeF(feeling))}
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
            .map((feeling) => (
              <IonItem key={feeling.id}>
                <IonLabel>{feeling.val}</IonLabel>
                <IonCheckbox
                  slot="end"
                  value={feeling.val}
                  checked={feeling.isChecked}
                  onIonChange={(e) => (e.detail.checked ? addF(feeling) : removeF(feeling))}
                />
              </IonItem>
            ))}
        </IonList>
      </IonContent>
    </React.Suspense>
  );
};

interface ThoughtPageProps extends RouteComponentProps {
  match: any;
}
const Thought: React.FC<ThoughtPageProps> = ({ match, history, location }) => {
  const id = match.params.id || '';
  const [presentPop, dismissPop] = useIonPopover(PopoverList, { onHide: () => dismiss() });
  const [viewOnly, setViewOnly] = useState(false);

  const [feelings, setFeelings] = useState<Feeling[]>([]);
  const [description, setDescription] = useState('');
  const [thoughts, setThoughts] = useState('');
  const [acted, setActed] = useState('');

  const addFeeling = (a: Feeling) => {
    setFeelings([...feelings, a]);
  };

  const removeFeeling = (a: Feeling) => {
    let temp = feelings.filter((f) => f.id !== a.id);
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
    let myThoughts: ThoughtInterface[] = [];
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
              feelings.map((feeling) => (
                <IonChip key={feeling.id}>
                  <IonLabel>{feeling.val}</IonLabel>
                  {!viewOnly && <IonIcon icon={close} onClick={() => removeFeeling(feeling)} />}
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
