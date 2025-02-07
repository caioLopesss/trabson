import React from "react";
import { useState, useEffect } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Modal,
  Image,
  Alert,
} from "react-native";
import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { Categories } from "@/components/categories";
import { linkstorage, LinkStorage } from "@/storage/link-storage";

import { Link } from "@/components/link";
import { Option } from "@/components/option";
import { router, Router } from "expo-router";
import { categories } from "@/utils/categories";

export default function Index() {
  const [category, setCategory] = useState(categories[0].name);
  const [links, setLinks] = useState<LinkStorage[]>([]);

  async function getLinks() {
    try {
      const response = await linkstorage.get();
      setLinks(response);
    } catch (error) {
      Alert.alert("Erro", "Nao foi possivel listar os  links");
    }
  }
  useEffect(() => {
    getLinks();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />
        <TouchableOpacity onPress={() => router.navigate("./add")}>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>
      <>
        <Categories onChange={setCategory} selected={category} />

        <FlatList
          data={links}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Link
              name={item.name}
              url={item.url}
              onDetails={() => console.log("clicou!")}
            />
          )}
          style={styles.links}
          contentContainerStyle={styles.linkContent}
          showsVerticalScrollIndicator={false}
        />
        <Modal transparent visible={false}>
          <View style={styles.modal}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalCategory}>Curso</Text>
                <TouchableOpacity>
                  <MaterialIcons
                    name="close"
                    size={20}
                    color={colors.gray[400]}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.modalLinkName}>RocketSeat</Text>
              <Text style={styles.modalUrl}>https://rocketseat.com.br/</Text>
              <View style={styles.modalFooter}>
                <Option name="Excluir" icon="delete" variant="secondary" />
                <Option name="Abrir" icon="language" />
              </View>
            </View>
          </View>
        </Modal>
      </>
    </View>
  );
}
