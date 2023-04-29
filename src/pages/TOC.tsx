import React from "react";
import {IonPage, IonFooter, IonList, IonItem, IonLabel, IonHeader, IonButton, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonIcon} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import { chevronForwardOutline } from "ionicons/icons";

const TOC: React.FC = () => (
   
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle> Table of Contents</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Cover</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
            <IonItem routerLink="/" routerDirection="back">
                <IonLabel>
                    Cover
                </IonLabel>
            </IonItem>
            <IonItem routerLink="/chapter/1" routerDirection="back">
                <IonLabel>
                    Chapter 1
                </IonLabel>
            </IonItem>
            <IonItem routerLink="/" routerDirection="back">
                <IonLabel>
                    Chapter 2
                </IonLabel>
            </IonItem>
            <IonItem routerLink="/" routerDirection="back">
                <IonLabel>
                    Chapter 3
                </IonLabel>
            </IonItem>
        </IonList>
      
      
      </IonContent>
      <IonFooter>
        <IonToolbar>
            <IonButton expand="block" routerLink="/">
              <IonIcon icon={chevronForwardOutline} />
            </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
)
export default TOC;
    
