import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { router } from "expo-router";
import React, { useRef } from "react";
import {
  Animated,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColors } from "@/hooks/useColors";
import { PRODUCTS, Product } from "@/constants/products";

function ProductRow({ product }: { product: Product }) {
  const colors = useColors();
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () =>
    Animated.spring(scale, { toValue: 0.98, useNativeDriver: true }).start();
  const handlePressOut = () =>
    Animated.spring(scale, { toValue: 1, friction: 4, useNativeDriver: true }).start();

  return (
    <Pressable
      onPress={() => {
        Haptics.selectionAsync();
        router.push(`/product/${product.id}`);
      }}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      testID={`product-row-${product.id}`}
    >
      <Animated.View
        style={[
          styles.row,
          {
            backgroundColor: colors.card,
            borderColor: colors.border,
            transform: [{ scale }],
          },
        ]}
      >
        <View
          style={[
            styles.rowIcon,
            { backgroundColor: product.accentColor + "18" },
          ]}
        >
          <Ionicons
            name={product.iconName as any}
            size={28}
            color={product.accentColor}
          />
        </View>

        <View style={styles.rowContent}>
          <View style={styles.rowHeader}>
            <View>
              <Text style={[styles.rowCode, { color: product.accentColor }]}>
                {product.code}
              </Text>
              <Text style={[styles.rowName, { color: colors.foreground }]}>
                {product.name}
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.mutedForeground} />
          </View>

          <Text style={[styles.rowTagline, { color: colors.mutedForeground }]}>
            {product.tagline}
          </Text>

          <View style={styles.rowHighlights}>
            {product.highlights.slice(0, 2).map((h) => (
              <View key={h} style={styles.highlightRow}>
                <Ionicons name="checkmark-circle" size={14} color={product.accentColor} />
                <Text style={[styles.highlightText, { color: colors.mutedForeground }]}>
                  {h}
                </Text>
              </View>
            ))}
          </View>

          <View
            style={[
              styles.warrantyBadge,
              { backgroundColor: product.accentColor + "15" },
            ]}
          >
            <Ionicons name="ribbon" size={12} color={product.accentColor} />
            <Text style={[styles.warrantyText, { color: product.accentColor }]}>
              {product.warranty}
            </Text>
          </View>
        </View>
      </Animated.View>
    </Pressable>
  );
}

export default function ProductsScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const isWeb = Platform.OS === "web";

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={{
        paddingBottom: isWeb ? 84 + 20 : 100,
        paddingTop: isWeb ? 67 + insets.top : insets.top,
      }}
      showsVerticalScrollIndicator={false}
    >
      {/* Page Header */}
      <View style={styles.pageHeader}>
        <Text style={[styles.pageLabel, { color: colors.mutedForeground }]}>
          ROOF SYSTEMS
        </Text>
        <Text style={[styles.pageTitle, { color: colors.foreground }]}>
          Three levels of{"\n"}protection
        </Text>
        <Text style={[styles.pageBody, { color: colors.mutedForeground }]}>
          Each system is manufactured at our Davie, FL facility and installed by our
          licensed crew.
        </Text>
      </View>

      {/* Products */}
      <View style={styles.list}>
        {PRODUCTS.map((product) => (
          <ProductRow key={product.id} product={product} />
        ))}
      </View>

      {/* Info banner */}
      <View
        style={[
          styles.infoBanner,
          { backgroundColor: colors.muted, borderColor: colors.border },
        ]}
      >
        <Ionicons name="information-circle" size={20} color={colors.primary} />
        <Text style={[styles.infoText, { color: colors.mutedForeground }]}>
          All products available for full installation, buy-direct (DIY), or supply
          to your own licensed contractor.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  pageHeader: {
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
    lineHeight: 36,
    marginBottom: 10,
  },
  pageBody: {
    fontSize: 14,
    lineHeight: 21,
  },
  list: {
    paddingHorizontal: 16,
    gap: 14,
  },
  row: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
    flexDirection: "row",
    gap: 14,
  },
  rowIcon: {
    width: 56,
    height: 56,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  rowContent: { flex: 1, gap: 8 },
  rowHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  rowCode: {
    fontSize: 11,
    fontWeight: "700" as const,
    letterSpacing: 1,
    marginBottom: 1,
  },
  rowName: {
    fontSize: 20,
    fontWeight: "800" as const,
  },
  rowTagline: {
    fontSize: 13,
    lineHeight: 19,
  },
  rowHighlights: { gap: 5 },
  highlightRow: { flexDirection: "row", alignItems: "flex-start", gap: 7 },
  highlightText: { fontSize: 12, lineHeight: 18, flex: 1 },
  warrantyBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginTop: 2,
  },
  warrantyText: {
    fontSize: 11,
    fontWeight: "600" as const,
  },
  infoBanner: {
    margin: 16,
    marginTop: 20,
    borderRadius: 12,
    borderWidth: 1,
    padding: 14,
    flexDirection: "row",
    gap: 10,
    alignItems: "flex-start",
  },
  infoText: {
    flex: 1,
    fontSize: 13,
    lineHeight: 19,
  },
});
