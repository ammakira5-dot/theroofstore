import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useRef } from "react";
import {
  Animated,
  Dimensions,
  ImageBackground,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColors } from "@/hooks/useColors";
import { PRODUCTS } from "@/constants/products";

const { width } = Dimensions.get("window");

function AnimatedCard({
  children,
  onPress,
  style,
}: {
  children: React.ReactNode;
  onPress?: () => void;
  style?: object;
}) {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.97,
      useNativeDriver: true,
    }).start();
  };
  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable onPress={onPress} onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <Animated.View style={[{ transform: [{ scale }] }, style]}>
        {children}
      </Animated.View>
    </Pressable>
  );
}

const DIFFERENTIATORS = [
  { icon: "ribbon", label: "A+ BBB Rated", sublabel: "Since 1994" },
  { icon: "construct", label: "Licensed", sublabel: "Manufacturer & Contractor" },
  { icon: "location", label: "Davie, FL", sublabel: "Factory Direct" },
];

export default function HomeScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const isWeb = Platform.OS === "web";

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={{ paddingBottom: isWeb ? 84 + 20 : 100 }}
      showsVerticalScrollIndicator={false}
    >
      {/* Hero */}
      <View style={styles.heroContainer}>
        <ImageBackground
          source={require("@/assets/images/hero-home.png")}
          style={styles.heroImage}
          resizeMode="cover"
        >
          <LinearGradient
            colors={["rgba(57,80,95,0.3)", "rgba(57,80,95,0.75)", "rgba(15,30,40,0.98)"]}
            style={[
              styles.heroGradient,
              { paddingTop: isWeb ? 67 + insets.top + 32 : insets.top + 32 },
            ]}
          >
            <View style={styles.heroBadge}>
              <Text style={styles.heroBadgeText}>Florida's Only Licensed Manufacturer-Contractor</Text>
            </View>

            <Text style={styles.heroTitle}>Don't Re-Roof.</Text>
            <Text style={[styles.heroTitle, { color: "#28A745" }]}>Weatherproof</Text>
            <Text style={styles.heroSubtitle}>at 1/2 the Cost</Text>

            <Text style={[styles.heroBody, { color: "rgba(255,255,255,0.8)" }]}>
              Three proprietary shield systems protect Florida roofs from fungal growth,
              weather damage, and hurricane-force winds.
            </Text>

            <View style={styles.heroActions}>
              <Pressable
                style={[styles.heroCta, { backgroundColor: "#28A745" }]}
                onPress={() => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                  router.push("/(tabs)/products");
                }}
                testID="hero-explore-btn"
              >
                <Ionicons name="shield-checkmark" size={18} color="#fff" />
                <Text style={styles.heroCtaText}>Explore Systems</Text>
              </Pressable>

              <Pressable
                style={[styles.heroCtaOutline]}
                onPress={() => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                  router.push("/(tabs)/quote");
                }}
                testID="hero-quote-btn"
              >
                <Text style={styles.heroCtaOutlineText}>Free Quote</Text>
              </Pressable>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>

      {/* Differentiators */}
      <View style={[styles.diffRow, { backgroundColor: colors.primary }]}>
        {DIFFERENTIATORS.map((d, i) => (
          <View
            key={d.label}
            style={[
              styles.diffItem,
              i < DIFFERENTIATORS.length - 1 && {
                borderRightWidth: 1,
                borderRightColor: "rgba(255,255,255,0.2)",
              },
            ]}
          >
            <Ionicons name={d.icon as any} size={20} color="#28A745" />
            <Text style={styles.diffLabel}>{d.label}</Text>
            <Text style={styles.diffSub}>{d.sublabel}</Text>
          </View>
        ))}
      </View>

      {/* Section: Three Shields */}
      <View style={[styles.section, { paddingHorizontal: 20 }]}>
        <Text style={[styles.sectionLabel, { color: colors.mutedForeground }]}>
          THE THREE SHIELDS
        </Text>
        <Text style={[styles.sectionTitle, { color: colors.foreground }]}>
          Pick the protection{"\n"}your roof deserves
        </Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, gap: 14 }}
        style={{ marginBottom: 28 }}
      >
        {PRODUCTS.map((product) => (
          <AnimatedCard
            key={product.id}
            onPress={() => {
              Haptics.selectionAsync();
              router.push(`/product/${product.id}`);
            }}
          >
            <View
              style={[
                styles.productCard,
                { backgroundColor: colors.card, borderColor: colors.border },
              ]}
            >
              <View
                style={[
                  styles.productCardBadge,
                  { backgroundColor: product.accentColor + "18" },
                ]}
              >
                <Ionicons name={product.iconName as any} size={22} color={product.accentColor} />
                <Text style={[styles.productCardCode, { color: product.accentColor }]}>
                  {product.code}
                </Text>
              </View>
              <Text style={[styles.productCardName, { color: colors.foreground }]}>
                {product.name}
              </Text>
              <Text style={[styles.productCardTagline, { color: colors.mutedForeground }]}>
                {product.tagline}
              </Text>
              <View style={styles.productCardFooter}>
                <Text style={[styles.productCardWarranty, { color: product.accentColor }]}>
                  {product.warranty}
                </Text>
                <Ionicons name="arrow-forward" size={16} color={colors.mutedForeground} />
              </View>
            </View>
          </AnimatedCard>
        ))}
      </ScrollView>

      {/* Call CTA */}
      <Pressable
        style={[styles.callBanner, { backgroundColor: colors.primary }]}
        onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
          router.push("/(tabs)/quote");
        }}
        testID="call-banner"
      >
        <Ionicons name="call" size={22} color="#28A745" />
        <View style={{ flex: 1 }}>
          <Text style={styles.callBannerTitle}>Talk to a specialist</Text>
          <Text style={styles.callBannerSub}>954-210-9614 · Free consultation</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="rgba(255,255,255,0.6)" />
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  heroContainer: { width: "100%" },
  heroImage: { width: "100%", minHeight: 520 },
  heroGradient: {
    flex: 1,
    minHeight: 520,
    paddingHorizontal: 24,
    paddingBottom: 32,
    justifyContent: "flex-end",
  },
  heroBadge: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(40,167,69,0.2)",
    borderColor: "rgba(40,167,69,0.5)",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginBottom: 16,
  },
  heroBadgeText: {
    color: "#28A745",
    fontSize: 11,
    fontWeight: "600" as const,
    letterSpacing: 0.5,
  },
  heroTitle: {
    fontSize: 48,
    fontWeight: "800" as const,
    color: "#ffffff",
    lineHeight: 54,
  },
  heroSubtitle: {
    fontSize: 34,
    fontWeight: "700" as const,
    color: "#ffffff",
    marginBottom: 14,
  },
  heroBody: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 24,
  },
  heroActions: { flexDirection: "row", gap: 12 },
  heroCta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 12,
  },
  heroCtaText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "700" as const,
  },
  heroCtaOutline: {
    borderWidth: 1.5,
    borderColor: "rgba(255,255,255,0.5)",
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 12,
    justifyContent: "center",
  },
  heroCtaOutlineText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "600" as const,
  },
  diffRow: {
    flexDirection: "row",
    paddingVertical: 16,
  },
  diffItem: {
    flex: 1,
    alignItems: "center",
    gap: 3,
    paddingVertical: 4,
  },
  diffLabel: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "700" as const,
    textAlign: "center",
  },
  diffSub: {
    color: "rgba(255,255,255,0.65)",
    fontSize: 10,
    textAlign: "center",
  },
  section: { marginTop: 28, marginBottom: 16 },
  sectionLabel: {
    fontSize: 11,
    fontWeight: "700" as const,
    letterSpacing: 1.5,
    marginBottom: 6,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: "800" as const,
    lineHeight: 32,
  },
  productCard: {
    width: width * 0.65,
    borderRadius: 16,
    borderWidth: 1,
    padding: 18,
    gap: 10,
  },
  productCardBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  productCardCode: {
    fontSize: 12,
    fontWeight: "700" as const,
    letterSpacing: 1,
  },
  productCardName: {
    fontSize: 22,
    fontWeight: "800" as const,
  },
  productCardTagline: {
    fontSize: 13,
    lineHeight: 19,
    flex: 1,
  },
  productCardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
  },
  productCardWarranty: {
    fontSize: 12,
    fontWeight: "600" as const,
    flex: 1,
  },
  callBanner: {
    marginHorizontal: 20,
    marginTop: 8,
    borderRadius: 16,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  callBannerTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700" as const,
  },
  callBannerSub: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 13,
    marginTop: 2,
  },
});
