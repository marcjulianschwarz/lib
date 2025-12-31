import SettingsSection from "@/components/SettingsSection/SettingsSection";

export default function SettingsSectionStory() {
  return (
    <div className="flex flex-col gap-4">
      <SettingsSection
        title="General Settings"
        description="Configure your preferences"
      >
        <p className="text-sm text-gray-600">Settings content goes here.</p>
      </SettingsSection>

      <SettingsSection
        title="Danger Zone"
        description="Destructive actions"
        variant="danger"
      >
        <p className="text-sm text-gray-600">Dangerous settings go here.</p>
      </SettingsSection>
    </div>
  );
}
