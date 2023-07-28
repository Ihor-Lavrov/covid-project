import { DataSetDTO, GraphType } from "../types";

export const unitedDataSet: DataSetDTO[] = [
  {
    name: "Total Cases",
    value: "total_cases",
    colors: {
      primary: "#57a4a4",
      secondary: "#ae3ba1",
    },
  },
  {
    name: "New Cases",
    value: "new_cases",
    colors: {
      primary: "#1cdcef",
      secondary: "#29ccc1",
    },
  },
  {
    name: "New Cases Smoothed",
    value: "new_cases_smoothed",
    colors: {
      primary: "#127b32",
      secondary: "#3f9e71",
    },
  },
  {
    name: "Total Cases Per Million",
    value: "total_cases_per_million",
    colors: {
      primary: "#66506c",
      secondary: "#d76200",
    },
  },
  {
    name: "New Cases Per Million",
    value: "new_cases_per_million",
    colors: {
      primary: "#45b875",
      secondary: "#d656e1",
    },
  },
  {
    name: "New Cases Smoothed Per Million",
    value: "new_cases_smoothed_per_million",
    colors: {
      primary: "#539ef5",
      secondary: "#165001",
    },
  },
  {
    name: "Total Deaths",
    value: "total_deaths",
    colors: {
      primary: "#2ed878",
      secondary: "#9f03fe",
    },
  },
  {
    name: "New Deaths",
    value: "new_deaths",
    colors: {
      primary: "#bf417f",
      secondary: "#c8ac4d",
    },
  },
  {
    name: "New Deaths Smoothed",
    value: "new_deaths_smoothed",
    colors: {
      primary: "#486d00",
      secondary: "#9c014d",
    },
  },
  {
    name: "Total Deaths Per Million",
    value: "total_deaths_per_million",
    colors: {
      primary: "#27232d",
      secondary: "#95e5ff",
    },
  },
  {
    name: "New Deaths Per Million",
    value: "new_deaths_per_million",
    colors: {
      primary: "#86633b",
      secondary: "#81c790",
    },
  },
  {
    name: "New Deaths Smoothed Per Million",
    value: "new_deaths_smoothed_per_million",
    colors: {
      primary: "#849a5e",
      secondary: "#a1c3f8",
    },
  },
  {
    name: "Excess Mortality",
    value: "excess_mortality",
    colors: {
      primary: "#8796fc",
      secondary: "#bd4af4",
    },
  },
  {
    name: "Excess Mortality Cumulative",
    value: "excess_mortality_cumulative",
    colors: {
      primary: "#702e6c",
      secondary: "#fc7f29",
    },
  },
  {
    name: "Excess Mortality Cumulative Absolute",
    value: "excess_mortality_cumulative_absolute",
    colors: {
      primary: "#378af1",
      secondary: "#86517c",
    },
  },
  {
    name: "Excess Mortality Cumulative Per Million",
    value: "excess_mortality_cumulative_per_million",
    colors: {
      primary: "#f3d81",
      secondary: "#47bb8b",
    },
  },
  {
    name: "Icu Patients",
    value: "icu_patients",
    colors: {
      primary: "#b285d5",
      secondary: "#403061",
    },
  },
  {
    name: "Icu Patients Per Million",
    value: "icu_patients_per_million",
    colors: {
      primary: "#eb1049",
      secondary: "#2f8108",
    },
  },
  {
    name: "Hosp Patients",
    value: "hosp_patients",
    colors: {
      primary: "#c9302d",
      secondary: "#6bc476",
    },
  },
  {
    name: "Hosp Patients Per Million",
    value: "hosp_patients_per_million",
    colors: {
      primary: "#c84172",
      secondary: "#9d0d2b",
    },
  },
  {
    name: "Weekly Icu Admissions",
    value: "weekly_icu_admissions",
    colors: {
      primary: "#dd7958",
      secondary: "#dd1df2",
    },
  },
  {
    name: "Weekly Icu Admissions Per Million",
    value: "weekly_icu_admissions_per_million",
    colors: {
      primary: "#60a994",
      secondary: "#189d5d",
    },
  },
  {
    name: "Weekly Hosp Admissions",
    value: "weekly_hosp_admissions",
    colors: {
      primary: "#db7060",
      secondary: "#f5ea11",
    },
  },
  {
    name: "Weekly Hosp Admissions Per Million",
    value: "weekly_hosp_admissions_per_million",
    colors: {
      primary: "#c4032b",
      secondary: "#b0cf9a",
    },
  },
  {
    name: "Policy Responses",
    value: "Policy responses",
    colors: {
      primary: "#d3caea",
      secondary: "#be6038",
    },
  },
  {
    name: "Reproduction Rate",
    value: "reproduction_rate",
    colors: {
      primary: "#fd7978",
      secondary: "#e28ba0",
    },
  },
  {
    name: "Total Tests",
    value: "total_tests",
    colors: {
      primary: "#1103d6",
      secondary: "#e79691",
    },
  },
  {
    name: "New Tests",
    value: "new_tests",
    colors: {
      primary: "#27e9a1",
      secondary: "#bf9dca",
    },
  },
  {
    name: "Total Tests Per Thousand",
    value: "total_tests_per_thousand",
    colors: {
      primary: "#59704b",
      secondary: "#39ae89",
    },
  },
  {
    name: "New Tests Per Thousand",
    value: "new_tests_per_thousand",
    colors: {
      primary: "#d2fba2",
      secondary: "#a9c08f",
    },
  },
  {
    name: "New Tests Smoothed",
    value: "new_tests_smoothed",
    colors: {
      primary: "#f6f496",
      secondary: "#388bc0",
    },
  },
  {
    name: "New Tests Smoothed Per Thousand",
    value: "new_tests_smoothed_per_thousand",
    colors: {
      primary: "#a02d4",
      secondary: "#438482",
    },
  },
  {
    name: "Positive Rate",
    value: "positive_rate",
    colors: {
      primary: "#877969",
      secondary: "#b650b8",
    },
  },
  {
    name: "Tests Per Case",
    value: "tests_per_case",
    colors: {
      primary: "#68ce84",
      secondary: "#3e613f",
    },
  },
  {
    name: "Tests Units",
    value: "tests_units",
    colors: {
      primary: "#2bb65c",
      secondary: "#6ca8f4",
    },
  },
  {
    name: "Total Vaccinations",
    value: "total_vaccinations",
    colors: {
      primary: "#ae16a3",
      secondary: "#e8f6c1",
    },
  },
  {
    name: "People Vaccinated",
    value: "people_vaccinated",
    colors: {
      primary: "#b163b5",
      secondary: "#940179",
    },
  },
  {
    name: "People Fully Vaccinated",
    value: "people_fully_vaccinated",
    colors: {
      primary: "#36085b",
      secondary: "#a2c871",
    },
  },
  {
    name: "Total Boosters",
    value: "total_boosters",
    colors: {
      primary: "#403ef5",
      secondary: "#1240f",
    },
  },
  {
    name: "New Vaccinations",
    value: "new_vaccinations",
    colors: {
      primary: "#c2088a",
      secondary: "#5e3544",
    },
  },
  {
    name: "New Vaccinations Smoothed",
    value: "new_vaccinations_smoothed",
    colors: {
      primary: "#a26b93",
      secondary: "#3b22f9",
    },
  },
  {
    name: "Total Vaccinations Per Hundred",
    value: "total_vaccinations_per_hundred",
    colors: {
      primary: "#ef1c29",
      secondary: "#bd34f0",
    },
  },
  {
    name: "People Vaccinated Per Hundred",
    value: "people_vaccinated_per_hundred",
    colors: {
      primary: "#7cb66d",
      secondary: "#45bab2",
    },
  },
  {
    name: "People Fully Vaccinated Per Hundred",
    value: "people_fully_vaccinated_per_hundred",
    colors: {
      primary: "#a009f6",
      secondary: "#5bbe81",
    },
  },
  {
    name: "Total Boosters Per Hundred",
    value: "total_boosters_per_hundred",
    colors: {
      primary: "#e17ff9",
      secondary: "#397d5a",
    },
  },
  {
    name: "New Vaccinations Smoothed Per Million",
    value: "new_vaccinations_smoothed_per_million",
    colors: {
      primary: "#1ced25",
      secondary: "#b9880c",
    },
  },
  {
    name: "New People Vaccinated Smoothed",
    value: "new_people_vaccinated_smoothed",
    colors: {
      primary: "#20b478",
      secondary: "#c0a2bb",
    },
  },
  {
    name: "New People Vaccinated Smoothed Per Hundred",
    colors: {
      primary: "#f7985",
      secondary: "#84607a",
    },
    value: "new_people_vaccinated_smoothed_per_hundred",
  },
];

export const graphTypeOptions: GraphType[] = [
  {
    name: "Bar",
    value: "bar",
  },
  {
    name: "Linear",
    value: "linear",
  },
  {
    name: "World map",
    value: "worldMap",
  },
];
