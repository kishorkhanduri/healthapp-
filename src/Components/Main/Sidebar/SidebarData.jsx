import React from "react";
import PeopleIcon from '@mui/icons-material/People';
import ViewTimelineIcon from '@mui/icons-material/ViewTimeline';
import PlaceIcon from '@mui/icons-material/Place';
import ApartmentIcon from '@mui/icons-material/Apartment';
import MedicationIcon from '@mui/icons-material/Medication';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';

export const SidebarData = [
    {
        title: "Patients",
        icon: <PeopleIcon/>
    },
    {
        title: "Overview",
        icon: <ViewTimelineIcon/>
    },
    {
        title: "Map",
        icon: <PlaceIcon/>
    },
    {
        title: "Departments",
        icon: <ApartmentIcon/>
    },
    {
        title: "Doctors",
        icon: <MedicationIcon/>
    },
    {
        title: "History",
        icon: <HistoryIcon/>
    },
    {
        title: "Setting",
        icon: <SettingsIcon/>
    }
]