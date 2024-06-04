import { Tabs } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";


export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ 
        title: "Home",
        tabBarIcon:({size})=>(
          <MaterialCommunityIcons name="home" color='#c26879' size={size} />
        )
      }}/>
      <Tabs.Screen name="settings" options={{
        title: "Settings",
        tabBarIcon:({size})=>(
          <MaterialCommunityIcons name="cog" color='#c26879' size={size} />
        )
      }}/>
      <Tabs.Screen name="about" options={{
        title: "About",
        tabBarIcon:({size})=>(
          <MaterialCommunityIcons name="account-multiple" color='#c26879' size={size} />
        )
      }}/>
      <Tabs.Screen name="legale" options={{
        title: "Mention Légale",
        tabBarIcon:({size})=>(
          <MaterialCommunityIcons name="newspaper-variant" color='#c26879' size={size} />
        )
      }}/>
      <Tabs.Screen name="donate" options={{
        title: "Don",
        tabBarIcon:({size})=>(
          <MaterialCommunityIcons name="gift" color='#c26879' size={size} />
        )
      }}/>
    </Tabs>
  );
}
