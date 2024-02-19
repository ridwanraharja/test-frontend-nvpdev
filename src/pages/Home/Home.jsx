import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import { useSelector, useDispatch } from "react-redux";
import {
  Chart as ChartJS,
  ArcElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import {
  IonButtons,
  IonContent,
  IonGrid,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonRow,
  IonSpinner,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { getUsers } from "../../redux/features/thunks/users/usersThunk";
import {
  calculateCurrentAge,
  filterDataByGender,
  classifyAge,
} from "../../utils/helper";
import { Line, Pie } from "../../components/atoms/Charts";
import Items from "../../components/molecules/Items";

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Home() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const femaleData = filterDataByGender("female", users);
  const maleData = filterDataByGender("male", users);
  const age = users.map((user) => calculateCurrentAge(user.birthDate));
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };
  const labels = ["Gen Z", "Millenial", "Baby Boomer"];

  /**
   * Filter data by generation.
   * @param {string} generation - The generation to filter by.
   * @returns {Array} - The filtered data.
   */
  const filterDataByGeneration = (generation) => {
    return age.filter((age) => classifyAge(age) === generation);
  };

  const line = {
    labels,
    datasets: [
      {
        label: "Age Distribution",
        data: [
          filterDataByGeneration("Gen Z").length,
          filterDataByGeneration("Millenial").length,
          filterDataByGeneration("Baby Boomer").length,
        ],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const pie = {
    labels: ["Male", "Female"],
    datasets: [
      {
        label: " Population",
        data: [maleData.length, femaleData.length],
        backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const columns = [
    {
      name: "Username",
      selector: (row) => row.username,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
    },
  ];
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="overflow-auto">
        {loading && (
          <div className="flex justify-center items-center h-full">
            <IonSpinner name="crescent"></IonSpinner>
          </div>
        )}
        <IonGrid fixed>
          <IonRow>
            <Items title={"Gender"} sizeMd="6" size="12">
              <div className="flex flex-col items-center md:w-[60%] mt-5 w-full">
                <Pie data={pie} />
              </div>
            </Items>
            <Items title={"Age Distribution"} sizeMd="6" size="12">
              <div className="flex flex-col items-center mt-5 w-full">
                <Line options={options} data={line} />
              </div>
            </Items>
            <div className="mt-5 w-full">
              <DataTable columns={columns} data={users} pagination responsive />
            </div>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}
