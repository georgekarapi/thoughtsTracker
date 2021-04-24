import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonList,
  IonItem,
  IonLabel,
  IonChip,
  IonGrid,
  IonRow,
} from '@ionic/react';
import { add } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './Home.css';
export interface Thought {
  description: string;
  feelings: string[];
  thoughts: string;
  acted: string;
  date: Date;
}
const Home: React.FC<RouteComponentProps> = (props) => {
  const [myThoughts, setThoughts] = useState([]);

  useEffect(() => {
    const temp = localStorage.getItem('myThoughts');
    if (temp) {
      setThoughts(JSON.parse(temp));
    }
  }, [props.location]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ημερολόγιο Συμβάντων</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {myThoughts.length > 0 &&
            myThoughts.map((f: Thought, i) => (
              <IonItem key={i} button routerLink={`/thought/${i}`}>
                <IonGrid>
                  <IonRow>{new Date(f.date).toLocaleDateString('el-GR')}</IonRow>
                  <IonRow>
                    <p
                      style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {f.description}
                    </p>
                  </IonRow>
                  <IonRow>
                    {f.feelings.slice(0, f.feelings.length > 3 ? 4 : f.feelings.length).map((feeling, j) =>
                      j <= 2 ? (
                        <IonChip key={j}>
                          <IonLabel>{feeling}</IonLabel>
                        </IonChip>
                      ) : (
                        <p>...</p>
                      )
                    )}
                  </IonRow>
                </IonGrid>
              </IonItem>
            ))}
        </IonList>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton routerLink="/new-thought">
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;
