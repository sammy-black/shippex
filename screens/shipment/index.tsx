import {
  FlatList,
  Keyboard,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Checkbox from "expo-checkbox";

import ShipmentCard from "./ShipmentCard";
import Header from "./Header";
import { ThemedText } from "@/components/ThemedText";
import SearchInput from "@/components/SearchInput";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { InnerContainer, Spacer, StackContainer } from "@/styles";
import { ThemedView } from "@/components/ThemedView";
import FilterActionSheet from "./FilterActionSheet";
import axios from "@/utils/axios";
import { ShipmentData } from "@/types/ShipmentData";
import Spinner from "@/components/Spinner";
import { COLORS, FILTER_OPTIONS, FONTS } from "@/constants";

const TEST_STATUS_FILTER = [
  "Received",
  "Error",
  "Canceled",
  "Delivered",
  "On Hold",
];
const getRandomStatus = () =>
  TEST_STATUS_FILTER[Math.floor(Math.random() * TEST_STATUS_FILTER.length)];

const ShipmentScreen = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [searchText, setSearchText] = useState<string>("");
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [shipmentList, setShipmentList] = useState<ShipmentData[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  useEffect(() => {
    fetchShipments();
  }, []);

  const fetchShipments = useCallback(async () => {
    setIsFetching(true);
    try {
      const { data } = await axios.get("/frappe.client.get_list", {
        params: { doctype: "AWB", fields: JSON.stringify(["*"]) },
      });

      const fetchedData = data.message.map((item: ShipmentData) => ({
        ...item,
        status: getRandomStatus(),
      }));

      setShipmentList(fetchedData);
      setIsFetching(false);
    } catch (error) {
      setIsFetching(false);
    }
  }, []);

  const toggleCheckBox = useCallback((id: string) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  }, []);

  const toggleAllItems = useCallback(
    (check: boolean) => {
      const updatedCheckedItems = shipmentList.reduce(
        (acc, item) => ({ ...acc, [item.name]: check }),
        {}
      );
      setCheckedItems(updatedCheckedItems);
      setIsAllChecked(check);
    },
    [shipmentList]
  );

  const handleFilterOptions = (options: string[]) => {
    setSelectedFilters(options);
    setShowFilter(false);
  };

  const filteredShipmentList = useMemo(
    () =>
      shipmentList.filter((item) => {
        const matchesSearch =
          searchText === "" ||
          item.name.toLowerCase().includes(searchText.toLowerCase()) ||
          item.origin_city.toLowerCase().includes(searchText.toLowerCase()) ||
          item.destination_state
            .toLowerCase()
            .includes(searchText.toLowerCase());

        const matchesStatus =
          selectedFilters.length === 0 || selectedFilters.includes(item.status);

        return matchesSearch && matchesStatus;
      }),
    [shipmentList, searchText, selectedFilters]
  );

  return (
    <>
      <ThemedView style={{ flex: 1 }}>
        <InnerContainer style={{ gap: 12 }}>
          <Header />
          <View style={styles.introContainer}>
            <ThemedText style={{ color: "#00000099" }}>Hello,</ThemedText>
            <ThemedText type="title">Ibrahim, Shaker</ThemedText>
          </View>

          <SearchInput searchText={searchText} setSearchText={setSearchText} />
          <Spacer size={12} />

          <View style={styles.filterBtnContainer}>
            <TouchableOpacity
              onPress={() => setShowFilter(true)}
              style={styles.filterBtn}
            >
              <Ionicons name="filter" size={24} color="#58536E" />
              <Text style={styles.btnLabel}>Filter</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.filterBtn, { backgroundColor: COLORS.primary }]}
            >
              <MaterialCommunityIcons
                name="line-scan"
                size={24}
                color="white"
              />
              <Text style={[styles.btnLabel, { color: COLORS.white }]}>
                Add Scan
              </Text>
            </TouchableOpacity>
          </View>

          <Spacer size={12} />
          <StackContainer style={styles.shipmentsContainer}>
            <ThemedText
              type="subtitle"
              style={{ fontFamily: FONTS.SFPRO_SemiBold }}
            >
              Shipments
            </ThemedText>
            <TouchableOpacity onPress={() => toggleAllItems(!isAllChecked)}>
              <StackContainer style={{ alignItems: "center" }} spacing={8}>
                <Checkbox
                  style={styles.checkbox}
                  value={isAllChecked}
                  color={isAllChecked ? COLORS.primary : undefined}
                  onValueChange={() => toggleAllItems(!isAllChecked)}
                />
                <ThemedText
                  style={{ color: COLORS.primary }}
                  type="defaultRegular"
                >
                  Mark All
                </ThemedText>
              </StackContainer>
            </TouchableOpacity>
          </StackContainer>

          {isFetching ? (
            <Spinner />
          ) : (
            <FlatList
              data={filteredShipmentList}
              renderItem={({ item }) => (
                <ShipmentCard
                  item={item}
                  checked={!!checkedItems[item.name]}
                  setChecked={() => toggleCheckBox(item.name)}
                />
              )}
              keyExtractor={(item) => item.name}
              contentContainerStyle={styles.flatList}
              refreshControl={
                <RefreshControl
                  refreshing={isFetching}
                  onRefresh={() => fetchShipments()}
                />
              }
            />
          )}
        </InnerContainer>
      </ThemedView>

      <FilterActionSheet
        filterOptions={FILTER_OPTIONS}
        handleFilterOptions={handleFilterOptions}
        visible={showFilter}
        handleClose={() => setShowFilter(false)}
      />
    </>
  );
};

export default ShipmentScreen;

const styles = StyleSheet.create({
  introContainer: { paddingVertical: 12 },
  filterBtnContainer: { flexDirection: "row", gap: 14 },
  filterBtn: {
    paddingVertical: 6,
    paddingRight: 18,
    paddingLeft: 14,
    borderRadius: 10,
    backgroundColor: COLORS.gray,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    flex: 1,
  },
  btnLabel: {
    fontSize: 16,
    color: "#58536E",
    fontFamily: FONTS.Inter_400Regular,
  },
  shipmentsContainer: { alignItems: "center", justifyContent: "space-between" },
  flatList: { paddingBottom: 50 },
  checkbox: { borderColor: "#D0D5DD", height: 20, width: 20, borderRadius: 5 },
});
