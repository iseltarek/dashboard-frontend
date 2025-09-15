import { createContext, ReactNode, useContext, useEffect, useState } from "react";
interface AnalyticsContextType {
	EventSubscribersAttendance: { name: string; value: number }[];
	totalPlaces: { name: string; value: number }[];
	totalUsers: { name: string; value: number }[];
	eventCreationData: { day: string; events: number }[];
	PrayerTimesData: { name: string; value: number }[];
}

export const AnalyticsContext = createContext<AnalyticsContextType | null>(null);

export const AnalyticsProvider = ({ children }: { children: ReactNode }) => {
	const eventCreationData = [
		{ day: "Sunday", events: 45 },
		{ day: "Monday", events: 52 },
		{ day: "Tuesday", events: 48 },
		{ day: "Wednesday", events: 61 },
		{ day: "Thursday", events: 55 },
		{ day: "Friday", events: 59 },
		{ day: "Saturday", events: 100 },
	];

	const PrayerTimesData = [
		{ name: "usa", value: 65 },
		{ name: "egy", value: 30 },
		{ name: "ca", value: 85 },
		{ name: "fr", value: 55 },
		{ name: "aue", value: 95 },
	];

	const EventSubscribersAttendance = [
		{
			name: "Attendance",
			value: 126,
		},
		{
			name: "Absence",
			value: 10,
		},
	];
	const totalUsers = [
		{
			name: "Verified",
			value: 45,
		},
		{
			name: "Pending",
			value: 30,
		},
		{
			name: "Blocked",
			value: 15,
		},
		{
			name: "UnVerified",
			value: 10,
		},
	];
	const totalPlaces = [
		{
			name: "Verified",
			value: 1250,
		},
		{
			name: "Pending",
			value: 340,
		},
		{
			name: "Unverified",
			value: 89,
		},
	];
	return <AnalyticsContext.Provider value={{ EventSubscribersAttendance, totalPlaces, totalUsers, eventCreationData, PrayerTimesData }}>{children}</AnalyticsContext.Provider>;
};

export const useAnalytics = () => {
	const context = useContext(AnalyticsContext);
	if (!context) {
		throw new Error("useEvents must be used within a EventsProvider");
	}
	return context;
};
