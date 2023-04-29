import { IonButtons, IonText,  IonGrid, IonRow, IonCol, IonFooter, IonButton, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import { arrowBack, arrowForward, menuOutline } from "ionicons/icons";
import './Chapters.css';



const Chapter2: React.FC = () => 
(
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Chapter 2</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Chapter 2</IonTitle>
          </IonToolbar>
          </IonHeader>

          <IonContent className="ion-padding">
            <h1>Chapter 2</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate nisl non dui accumsan consequat. Aenean vel vestibulum lorem. Aenean fermentum commodo diam vitae placerat. Phasellus blandit consectetur posuere. Duis ullamcorper mollis efficitur. Aliquam suscipit tortor et libero vehicula, sed vehicula lacus dictum. Curabitur lectus tellus, maximus ac augue eu, auctor dictum justo. Quisque interdum tincidunt volutpat.</p>
            <p>Quisque vitae risus cursus, lobortis quam lacinia, tincidunt velit. Proin sit amet lobortis lectus. Phasellus velit dui, tempus id porta eget, lobortis hendrerit ex. Vestibulum malesuada, nisi non imperdiet pretium, elit est semper metus, at euismod orci velit vitae est. Morbi accumsan dignissim ex ut efficitur. Phasellus molestie neque lorem. Cras lobortis ligula in pretium lobortis. Phasellus magna eros, placerat nec consequat at, sodales a augue. Nullam nunc urna, euismod eu lorem eget, egestas consectetur arcu. Maecenas vehicula mi at augue semper, sed malesuada nunc porttitor.</p>
            <p>Sed id lobortis turpis. Cras sagittis a felis sed rutrum. Vestibulum sed lorem sagittis, viverra ligula non, dictum urna. Aliquam ac ullamcorper sapien. Suspendisse vitae est in leo accumsan aliquet eget eget nunc. Proin sodales, ipsum mattis vulputate faucibus, justo tortor auctor urna, id tristique risus massa non augue. Pellentesque accumsan est augue, quis laoreet sem lacinia et. Suspendisse potenti. Sed consectetur lectus in pulvinar sodales.</p>
            <p>Integer quam ipsum, dignissim ut lorem dapibus, laoreet tempus nulla. Sed ultrices euismod urna, id interdum tellus accumsan vitae. Sed eget ex et est viverra elementum. Sed ac enim iaculis, pulvinar nulla in, eleifend leo. Integer posuere quam finibus tortor dictum hendrerit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin et ante quis risus consectetur rutrum at ut sem. Curabitur non convallis magna. Maecenas eleifend felis a ullamcorper maximus. Nullam commodo commodo ipsum id mattis.</p>
            <p>Nunc quis ligula lorem. Vestibulum sit amet sollicitudin magna. Integer facilisis commodo sem. Sed varius, enim eu tincidunt finibus, nisi magna tincidunt purus, quis vulputate sapien massa blandit nibh. Etiam eget lacinia dolor. In luctus enim eu consequat rhoncus. Integer laoreet, ligula vel egestas pulvinar, arcu mauris mattis nisi, id elementum libero metus vel justo.</p>
            </IonContent>

            <IonFooter>
            <IonText><div className='page_number'>2</div></IonText>
                <IonToolbar>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <IonButton routerDirection="back" routerLink="/chapter/1" expand="full">
                                    <IonIcon icon-only slot="start" icon={arrowBack} />
                                </IonButton>
                            </IonCol>
                            <IonCol>
                                <IonButton routerDirection="back" routerLink="/toc" expand="full">
                                    <IonIcon icon-only slot="" icon={menuOutline} />
                                </IonButton>
                            </IonCol>
                            <IonCol>
                                <IonButton routerDirection="forward" routerLink="/chapter/3" expand="full">
                                    <IonIcon icon-only slot="end" icon={arrowForward} />
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    
                </IonToolbar>
            </IonFooter>
          
      </IonContent>
    </IonPage>
  );


export default Chapter2;



