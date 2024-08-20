import React from "react";
import { Redirect } from "expo-router";

const home = () => {
	return <Redirect href="/(auth)/welcome" />;
};

export default home;
