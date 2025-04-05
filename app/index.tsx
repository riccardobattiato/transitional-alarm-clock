import * as React from "react";
import { SafeAreaView, View, ScrollView } from "react-native";
import BtnAddAlarm from "~/components/atoms/BtnAddAlarm";
import AlarmEntry from "~/components/organisms/AlarmEntry";
import { Text } from "~/components/ui/text";
import { sampleAlarms } from "~/mocks/alarms";

export default function Screen() {
  return (
    <SafeAreaView className="bg-background flex-1">
      <ScrollView className="flex-1" contentContainerClassName="gap-5 p-6">
        {sampleAlarms.map((alarm) => (
          <AlarmEntry
            key={alarm.id}
            {...alarm}
            onToggleActive={(value) => {
              console.log(`Alarm ${alarm.id} should be active: ${value}`);
            }}
          />
        ))}
      </ScrollView>
      <View className="absolute bottom-0 left-0 right-0 items-center p-8">
        <BtnAddAlarm />
      </View>
    </SafeAreaView>
  );
}
