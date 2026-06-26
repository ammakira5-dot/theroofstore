import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColors } from "@/hooks/useColors";
import { getProduct } from "@/constants/products";

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const isWeb = Platform.OS === "web";

  const product = getProduct(id ?? "");

  if (!product) {
    return (
      <View
        style={[
          styles.notFound,
          { backgroundColor: colors.background },
        ]}
      >
        <Ionicons name="alert-circle-outline" size={48} color={colors.mutedForeground} />
        <Text style={[styles.notFoundText, { color: colors.mutedForeground }]}>
          Product not found
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={{ paddingBottom: isWeb ? 84 + 20 : 120 }}
      showsVerticalScrollIndicator={false}
    >
      {/* Hero gradient header */}
      <LinearGradient
        colors={[product.accentColor + "CC", product.accentColor + "55", colors.background]}
        style={[
          styles.hero,
          { paddingTop: isWeb ? 67 + insets.top + 16 : insets.top + 16 },
        ]}
      >
        {/* Back button */}
        <Pressable
          style={[styles.backBtn, { backgroundColor: "rgba(255,255,255,0.25)" }]}
          onPress={() => {
            Haptics.selectionAsync();
            router.back();
          }}
          testID="back-btn"
        >
          <Ionicons name="arrow-back" size={20} color="#ffffff" />
        </Pressable>

        <View style={styles.heroContent}>
          <View
            style={[
              styles.heroIcon,
              { backgroundColor: "rgba(255,255,255,0.25)" },
            ]}
          >
            <Ionicons name={product.iconName as any} size={40} color="#ffffff" />
          </View>

          <View style={[styles.codeBadge, { backgroundColor: "rgba(255,255,255,0.3)" }]}>
            <Text style={styles.codeText}>{product.code}</Text>
          </View>

          <Text style={styles.heroTitle}>{product.name}</Text>
          <Text style={styles.heroTagline}>{product.tagline}</Text>

          <View style={styles.warrantyRow}>
            <Ionicons name="ribbon" size={16} color="#ffffff" />
            <Text style={styles.warrantyLabel}>{product.warranty}</Text>
          </View>
        </View>
      </LinearGradient>

      {/* Description */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.foreground }]}>
          About this system
        </Text>
        <Text style={[styles.description, { color: colors.mutedForeground }]}>
          {product.description}
        </Text>
      </View>

      {/* Key Features */}
      <View
        style={[
          styles.featuresCard,
          { backgroundColor: colors.card, borderColor: colors.border },
        ]}
      >
        <Text style={[styles.featuresTitle, { color: colors.foreground }]}>
          Key Features
        </Text>
        <View style={styles.featuresList}>
          {product.highlights.map((h) => (
            <View key={h} style={styles.featureRow}>
              <View
                style={[
                  styles.featureDot,
                  { backgroundColor: product.accentColor },
                ]}
              />
              <Text style={[styles.featureText, { color: colors.foreground }]}>
                {h}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Compatible Surfaces */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.foreground }]}>
          Compatible Surfaces
        </Text>
        <View style={styles.substrateRow}>
          {product.substrates.map((s) => (
            <View
              key={s}
              style={[
                styles.substrateBadge,
                { backgroundColor: colors.muted, borderColor: colors.border },
              ]}
            >
              <Text style={[styles.substrateText, { color: colors.foreground }]}>
                {s}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* CTA */}
      <View style={styles.ctaSection}>
        <Pressable
          style={[styles.ctaBtn, { backgroundColor: product.accentColor }]}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            router.push({
              pathname: "/(tabs)/quote",
            });
          }}
          testID="cta-quote-btn"
        >
          <Ionicons name="document-text" size={18} color="#ffffff" />
          <Text style={styles.ctaBtnText}>Get Free Quote</Text>
        </Pressable>

        <Pressable
          style={[
            styles.ctaBtnOutline,
            { borderColor: colors.border },
          ]}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            router.back();
          }}
        >
          <Text style={[styles.ctaBtnOutlineText, { color: colors.foreground }]}>
            View All Systems
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  notFound: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  notFoundText: { fontSize: 16 },
  hero: {
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  heroContent: { gap: 10 },
  heroIcon: {
    width: 72,
    height: 72,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
  codeBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  codeText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "700" as const,
    letterSpacing: 1,
  },
  heroTitle: {
    color: "#ffffff",
    fontSize: 36,
    fontWeight: "800" as const,
  },
  heroTagline: {
    color: "rgba(255,255,255,0.85)",
    fontSize: 16,
    lineHeight: 22,
  },
  warrantyRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 4,
  },
  warrantyLabel: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "600" as const,
  },
  section: {
    paddingHorizontal: 20,
    paddingTop: 24,
    gap: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700" as const,
  },
  description: {
    fontSize: 15,
    lineHeight: 24,
  },
  featuresCard: {
    marginHorizontal: 16,
    marginTop: 20,
    borderRadius: 16,
    borderWidth: 1,
    padding: 18,
    gap: 14,
  },
  featuresTitle: {
    fontSize: 16,
    fontWeight: "700" as const,
  },
  featuresList: { gap: 10 },
  featureRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  featureDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginTop: 6,
    flexShrink: 0,
  },
  featureText: {
    fontSize: 14,
    lineHeight: 22,
    flex: 1,
  },
  substrateRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  substrateBadge: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 7,
  },
  substrateText: { fontSize: 13, fontWeight: "500" as const },
  ctaSection: {
    paddingHorizontal: 20,
    paddingTop: 28,
    gap: 12,
  },
  ctaBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingVertical: 16,
    borderRadius: 14,
  },
  ctaBtnText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700" as const,
  },
  ctaBtnOutline: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: 14,
    borderWidth: 1,
  },
  ctaBtnOutlineText: {
    fontSize: 15,
    fontWeight: "600" as const,
  },
});
