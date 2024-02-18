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
} from "@ionic/react";
import Button from "../../components/atoms/Button";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { differenceInYears, parseISO } from "date-fns";
import { getUsers } from "../../redux/features/thunks/users/usersThunk";

export default function Home() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  console.log(users);
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  // const loadMore = () => {
  //   dispatch(fetchUsers());
  // };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const generateItems = () => {
    const newItems = [];
    for (let i = 0; i < 50; i++) {
      newItems.push(`Item ${1 + items.length + i}`);
    }
    setItems([...items, ...newItems]);
  };

  function calculateAge(birthDate) {
    const today = new Date();
    const futureDate = new Date(
      today.getFullYear() + 10,
      today.getMonth(),
      today.getDate()
    );
    return differenceInYears(futureDate, parseISO(birthDate));
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Button disabled className="mt-[100px]" />
        <IonList>
          {users.map((item) => (
            <IonItem key={item.id}>
              <IonAvatar slot="start">
                <img src={item.image} alt="avatar" />
              </IonAvatar>
              <IonLabel>{item.firstName}</IonLabel>
              <div>
                <div>
                  Current Age:{" "}
                  {differenceInYears(new Date(), parseISO(item.birthDate))}
                </div>
                <div>Age in 10 years: {calculateAge(item.birthDate)}</div>
              </div>
            </IonItem>
          ))}
        </IonList>
        <IonInfiniteScroll
          onIonInfinite={(ev) => {
            generateItems();
            setTimeout(() => ev.target.complete(), 500);
          }}
        >
          <IonInfiniteScrollContent></IonInfiniteScrollContent>
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  );
}
