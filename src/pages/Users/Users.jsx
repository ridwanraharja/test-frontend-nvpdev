import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { differenceInYears, parseISO } from "date-fns";
import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  IonNote,
  IonLoading,
  IonSpinner,
} from "@ionic/react";

import Button from "../../components/atoms/Button";
import { getUsers } from "../../redux/features/thunks/users/usersThunk";

export default function Users() {
  // Redux hooks
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);
  const [items, setItems] = useState([]);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      generateItems();
    }
  }, [users]);

  const generateItems = () => {
    const newItems = [];
    const startIndex = items.length;
    const endIndex = startIndex + 10;
    for (let i = startIndex; i < endIndex && i < users.length; i++) {
      newItems.push(users[i]);
    }
    setItems([...items, ...newItems]);
  };

  // calculates the age of the person 10 years from now using date-fns library
  const calculateAge = (birthDate) => {
    const today = new Date();

    const futureDate = new Date(
      today.getFullYear() + 10,
      today.getMonth(),
      today.getDate()
    );

    return differenceInYears(futureDate, parseISO(birthDate));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>All Users</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {loading && (
          <div className="flex justify-center items-center h-full">
            <IonSpinner name="crescent"></IonSpinner>
          </div>
        )}
        <IonList>
          {items.map((item, index) => (
            <IonItem key={item.id}>
              <IonAvatar slot="start">
                <img src={item.image} alt="avatar" />
              </IonAvatar>
              <IonLabel>
                <span className="text-slate-400">#{index + 1}</span>{" "}
                {item.firstName}
              </IonLabel>
              <IonNote slot="end">
                <div>
                  Current Age:{" "}
                  {differenceInYears(new Date(), parseISO(item.birthDate))}
                </div>
                <div>In 10 years: {calculateAge(item.birthDate)}</div>
              </IonNote>
            </IonItem>
          ))}
        </IonList>
        <IonInfiniteScroll
          onIonInfinite={(ev) => {
            generateItems();
            setTimeout(() => ev.target.complete(), 1000);
          }}
        >
          <IonInfiniteScrollContent
            loadingText="Please wait..."
            loadingSpinner="bubbles"
          ></IonInfiniteScrollContent>
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  );
}
