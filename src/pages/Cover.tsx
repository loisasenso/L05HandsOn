import React from "react";
import {IonPage, IonFooter, IonHeader, IonButton, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import './Cover.css';

const Cover: React.FC = () => (
   
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Cover</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Cover</IonTitle>
          </IonToolbar>
        </IonHeader>
      
      <h1>Alibaba & The 40 thieves</h1>
      <img src="https://picsum.photos/200/300" />
      <h2>Lois Asenso-Gyambibi</h2>
      </IonContent>
      <IonFooter>
        <IonToolbar>
            <IonButton expand="block" routerLink="/chapter/1">Start Reading</IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
)
    


export default Cover;