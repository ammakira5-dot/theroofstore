import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import React, { useState } from "react";
import {
  Alert,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColors } from "@/hooks/useColors";

const ROOF_TYPES = [
  "Clay Tile",
  "Concrete Tile",
  "Metal",
  "Flat / Low Slope",
  "Other",
];

const SERVICES = [
  { id: "fungalshield", label: "FungalShield (RP1)", icon: "shield-checkmark" },
  { id: "smartshield", label: "SmartShield (RP2)", icon: "flash" },
  { id: "roofshield", label: "RoofShield (RP3)", icon: "home" },
  { id: "unsure", label: "Not sure — advise me", icon: "help-circle" },
];

interface FormState {
  name: string;
  phone: string;
  email: string;
  address: string;
  roofType: string;
  service: string;
  message: string;
}

function FieldLabel({ label, required }: { label: string; required?: boolean }) {
  const colors = useColors();
  return (
    <Text style={[styles.label, { color: colors.foreground }]}>
      {label}
      {required && <Text style={{ color: "#28A745" }}> *</Text>}
    </Text>
  );
}

export default function QuoteScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const isWeb = Platform.OS === "web";

  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    address: "",
    roofType: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (key: keyof FormState) => (val: string) =>
    setForm((f) => ({ ...f, [key]: val }));

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.phone.trim() && !form.email.trim())
      return "Please enter a phone number or email.";
    return null;
  };

  const handleSubmit = async () => {
    const err = validate();
    if (err) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      Alert.alert("Missing info", err);
      return;
    }
    setLoading(true);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  };

  if (submitted) {
    return (
      <View
        style={[
          styles.successContainer,
          {
            backgroundColor: colors.background,
            paddingTop: isWeb ? 67 + insets.top : insets.top,
            paddingBottom: isWeb ? 84 + 20 : 100,
          },
        ]}
      >
        <View
          style={[
            styles.successIcon,
            { backgroundColor: "#28A74520" },
          ]}
        >
          <Ionicons name="checkmark-circle" size={60} color="#28A745" />
        </View>
        <Text style={[styles.successTitle, { color: colors.foreground }]}>
          Request Sent!
        </Text>
        <Text style={[styles.successBody, { color: colors.mutedForeground }]}>
          Our team will contact you within one business day to schedule your free
          consultation.
        </Text>
        <Text style={[styles.successPhone, { color: colors.primary }]}>
          954-210-9614
        </Text>
        <Pressable
          style={[styles.successBtn, { backgroundColor: colors.primary }]}
          onPress={() => {
            setSubmitted(false);
            setForm({
              name: "",
              phone: "",
              email: "",
              address: "",
              roofType: "",
              service: "",
              message: "",
            });
          }}
        >
          <Text style={styles.successBtnText}>Submit Another Request</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={{
        paddingBottom: isWeb ? 84 + 20 : 100,
        paddingTop: isWeb ? 67 + insets.top : insets.top,
      }}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.pageLabel, { color: colors.mutedForeground }]}>
          FREE CONSULTATION
        </Text>
        <Text style={[styles.pageTitle, { color: colors.foreground }]}>
          Get your free quote
        </Text>
        <Text style={[styles.pageBody, { color: colors.mutedForeground }]}>
          Tell us about your roof and we'll design the right shield system for you.
        </Text>
      </View>

      <View style={styles.form}>
        {/* Name */}
        <View style={styles.field}>
          <FieldLabel label="Your Name" required />
          <TextInput
            style={[
              styles.input,
              { backgroundColor: colors.muted, borderColor: colors.border, color: colors.foreground },
            ]}
            value={form.name}
            onChangeText={update("name")}
            placeholder="Jane Smith"
            placeholderTextColor={colors.mutedForeground}
            testID="input-name"
          />
        </View>

        {/* Phone + Email row */}
        <View style={styles.row2}>
          <View style={[styles.field, { flex: 1 }]}>
            <FieldLabel label="Phone" />
            <TextInput
              style={[
                styles.input,
                { backgroundColor: colors.muted, borderColor: colors.border, color: colors.foreground },
              ]}
              value={form.phone}
              onChangeText={update("phone")}
              placeholder="(954) 555-0100"
              placeholderTextColor={colors.mutedForeground}
              keyboardType="phone-pad"
              testID="input-phone"
            />
          </View>
          <View style={[styles.field, { flex: 1 }]}>
            <FieldLabel label="Email" />
            <TextInput
              style={[
                styles.input,
                { backgroundColor: colors.muted, borderColor: colors.border, color: colors.foreground },
              ]}
              value={form.email}
              onChangeText={update("email")}
              placeholder="jane@email.com"
              placeholderTextColor={colors.mutedForeground}
              keyboardType="email-address"
              autoCapitalize="none"
              testID="input-email"
            />
          </View>
        </View>

        {/* Address */}
        <View style={styles.field}>
          <FieldLabel label="Property Address" />
          <TextInput
            style={[
              styles.input,
              { backgroundColor: colors.muted, borderColor: colors.border, color: colors.foreground },
            ]}
            value={form.address}
            onChangeText={update("address")}
            placeholder="1234 Palm Ave, Fort Lauderdale, FL"
            placeholderTextColor={colors.mutedForeground}
            testID="input-address"
          />
        </View>

        {/* Roof Type */}
        <View style={styles.field}>
          <FieldLabel label="Roof Type" />
          <View style={styles.chipRow}>
            {ROOF_TYPES.map((rt) => (
              <Pressable
                key={rt}
                style={[
                  styles.chip,
                  {
                    backgroundColor:
                      form.roofType === rt ? colors.primary : colors.muted,
                    borderColor:
                      form.roofType === rt ? colors.primary : colors.border,
                  },
                ]}
                onPress={() => {
                  Haptics.selectionAsync();
                  update("roofType")(rt);
                }}
                testID={`chip-roof-${rt}`}
              >
                <Text
                  style={[
                    styles.chipText,
                    {
                      color:
                        form.roofType === rt ? "#ffffff" : colors.foreground,
                    },
                  ]}
                >
                  {rt}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* Service Interest */}
        <View style={styles.field}>
          <FieldLabel label="Interested In" />
          <View style={styles.serviceList}>
            {SERVICES.map((svc) => (
              <Pressable
                key={svc.id}
                style={[
                  styles.serviceItem,
                  {
                    backgroundColor:
                      form.service === svc.id
                        ? colors.primary + "15"
                        : colors.muted,
                    borderColor:
                      form.service === svc.id ? colors.primary : colors.border,
                  },
                ]}
                onPress={() => {
                  Haptics.selectionAsync();
                  update("service")(svc.id);
                }}
                testID={`service-${svc.id}`}
              >
                <Ionicons
                  name={svc.icon as any}
                  size={18}
                  color={form.service === svc.id ? colors.primary : colors.mutedForeground}
                />
                <Text
                  style={[
                    styles.serviceText,
                    {
                      color:
                        form.service === svc.id
                          ? colors.primary
                          : colors.foreground,
                    },
                  ]}
                >
                  {svc.label}
                </Text>
                {form.service === svc.id && (
                  <Ionicons
                    name="checkmark-circle"
                    size={16}
                    color={colors.primary}
                    style={{ marginLeft: "auto" }}
                  />
                )}
              </Pressable>
            ))}
          </View>
        </View>

        {/* Message */}
        <View style={styles.field}>
          <FieldLabel label="Additional Details" />
          <TextInput
            style={[
              styles.input,
              styles.textArea,
              { backgroundColor: colors.muted, borderColor: colors.border, color: colors.foreground },
            ]}
            value={form.message}
            onChangeText={update("message")}
            placeholder="Tell us about your roof, any concerns, or questions…"
            placeholderTextColor={colors.mutedForeground}
            multiline
            numberOfLines={4}
            testID="input-message"
          />
        </View>

        {/* Submit */}
        <Pressable
          style={[
            styles.submitBtn,
            { backgroundColor: loading ? colors.muted : "#28A745" },
          ]}
          onPress={handleSubmit}
          disabled={loading}
          testID="submit-btn"
        >
          {loading ? (
            <Text style={styles.submitText}>Sending…</Text>
          ) : (
            <>
              <Ionicons name="send" size={18} color="#ffffff" />
              <Text style={styles.submitText}>Request Free Quote</Text>
            </>
          )}
        </Pressable>

        <Text style={[styles.disclaimer, { color: colors.mutedForeground }]}>
          By submitting you agree to be contacted by The Roof Store. No spam, ever.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 20,
  },
  pageLabel: {
    fontSize: 11,
    fontWeight: "700" as const,
    letterSpacing: 1.5,
    marginBottom: 6,
  },
  pageTitle: {
    fontSize: 30,
    fontWeight: "800" as const,
    marginBottom: 8,
  },
  pageBody: { fontSize: 14, lineHeight: 21 },
  form: { paddingHorizontal: 16, gap: 18 },
  field: { gap: 8 },
  label: { fontSize: 13, fontWeight: "600" as const },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
  },
  textArea: {
    minHeight: 100,
    textAlignVertical: "top",
    paddingTop: 12,
  },
  row2: { flexDirection: "row", gap: 12 },
  chipRow: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  chip: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  chipText: { fontSize: 13, fontWeight: "500" as const },
  serviceList: { gap: 8 },
  serviceItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  serviceText: { fontSize: 14, fontWeight: "500" as const, flex: 1 },
  submitBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingVertical: 16,
    borderRadius: 14,
    marginTop: 4,
  },
  submitText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700" as const,
  },
  disclaimer: { fontSize: 12, textAlign: "center", lineHeight: 18, marginBottom: 8 },
  successContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    gap: 16,
  },
  successIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  successTitle: {
    fontSize: 28,
    fontWeight: "800" as const,
    textAlign: "center",
  },
  successBody: {
    fontSize: 15,
    lineHeight: 22,
    textAlign: "center",
  },
  successPhone: {
    fontSize: 20,
    fontWeight: "700" as const,
  },
  successBtn: {
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 8,
  },
  successBtnText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "700" as const,
  },
});
