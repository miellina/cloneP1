import { BookBookmark, Camera, Devices, Headphones, House, MagnifyingGlass, Play, Plus, PlusCircle } from 'phosphor-react-native';
import React from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/SpotifySearchStyles';

// Interface para definir a estrutura dos cards de descoberta
interface DiscoveryCard {
  id: string;
  title: string;
  backgroundImage: string;
  backgroundColor: string;
  textColor: string;
}

// Interface para definir as seções de navegação
interface NavigationSection {
  id: string;
  title: string;
  backgroundImage: string;
  backgroundColor: string;
  textColor: string;
}

// Componente principal da página de Busca
const SpotifySearch: React.FC = () => {
  // Dados mockados dos cards de "Descubra algo novo pra você"
  const discoveryCards: DiscoveryCard[] = [
    {
      id: '1',
      title: 'Música para você',
      backgroundImage: 'https://via.placeholder.com/150x150/E91E63/FFFFFF?text=🎵',
      backgroundColor: '#704086',
      textColor: '#FFFFFF',
    },
    {
      id: '2',
      title: '#jazz beats',
      backgroundImage: 'https://via.placeholder.com/150x150/1A1A1A/FFFFFF?text=🎷',
      backgroundColor: '#2A9D8F',
      textColor: '#FFFFFF',
    },
    {
      id: '3',
      title: 'Podcasts para você',
      backgroundImage: 'https://via.placeholder.com/150x150/FF9800/FFFFFF?text=🎙️',
      backgroundColor: '#F4A261',
      textColor: '#FFFFFF',
    },
  ];

  // Dados mockados das seções de navegação
  const navigationSections: NavigationSection[] = [
    {
      id: '1',
      title: 'Música',
      backgroundImage: 'https://via.placeholder.com/120x120/E91E63/FFFFFF?text=🎵',
      backgroundColor: '#E91E63',
      textColor: '#FFFFFF',
    },
    {
      id: '2',
      title: 'Podcasts',
      backgroundImage: 'https://via.placeholder.com/120x120/4CAF50/FFFFFF?text=🎙️',
      backgroundColor: '#E76F51',
      textColor: '#FFFFFF',
    },
       {
      id: '3',
      title: 'Eventos ao Vivo',
      backgroundImage: 'https://via.placeholder.com/120x120/4CAF50/FFFFFF?text=🎙️',
      backgroundColor: '#2E98E4',
      textColor: '#FFFFFF',
    },
    {
      id: '4',
      title: 'Feito para você',
      backgroundImage: 'https://via.placeholder.com/120x120/4CAF50/FFFFFF?text=🎙️',
      backgroundColor: '#4CAF50',
      textColor: '#FFFFFF',
    },
  ];

  // Componente para renderizar cada card de descoberta
  const DiscoveryCardComponent: React.FC<{ item: DiscoveryCard }> = ({ item }) => (
    <TouchableOpacity style={styles.discoveryCard}>
      <Image 
        source={{ uri: item.backgroundImage }}
        style={[styles.discoveryCardImage, { backgroundColor: item.backgroundColor }]}
        resizeMode="cover"
      />
      <View style={styles.discoveryCardOverlay}>
        <Text style={[styles.discoveryCardTitle, { color: item.textColor }]}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );

  // Componente para renderizar as seções de navegação
  const NavigationSectionComponent: React.FC<{ item: NavigationSection }> = ({ item }) => (
    <TouchableOpacity style={styles.navigationSection}>
      <View style={[styles.navigationSectionContent, { backgroundColor: item.backgroundColor }]}>
        <Text style={[styles.navigationSectionTitle, { color: item.textColor }]}>
          {item.title}
        </Text>
        <Image 
          source={{ uri: item.backgroundImage }}
          style={styles.navigationSectionImage}
          resizeMode="cover"
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Barra de status */}
      {/* <StatusBar barStyle="light-content" backgroundColor="#121212" /> */}
      
      {/* Cabeçalho */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Headphones size={30} color='white' weight='fill' />
          <Text style={styles.headerTitle}> Sua Biblioteca</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity >
            <Camera size={30} color='white' />
          </TouchableOpacity>
        </View>
      </View>

      {/* Barra de pesquisa */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <MagnifyingGlass size={25} color='black'/>
          <TextInput
            style={styles.searchInput}
            placeholder="O que você quer ouvir?"
            placeholderTextColor="#424242"
          />
        </View>
      </View>

      {/* Conteúdo principal */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        
        {/* Seção "Descubra algo novo pra você" */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Descubra algo novo pra você</Text>
          <ScrollView 
            horizontal 
            // showsHorizontalScrollIndicator={false}
            style={styles.discoveryScrollView}
            contentContainerStyle={styles.discoveryScrollContent}
          >
            {discoveryCards.map((item) => (
              <DiscoveryCardComponent key={item.id} item={item} />
            ))}
          </ScrollView>
        </View>

        {/* Seção "Navegar por todas as seções" */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Navegar por todas as seções</Text>
          <View style={styles.navigationGrid}>
            {navigationSections.map((item) => (
              <NavigationSectionComponent key={item.id} item={item} />
            ))}
          </View>
        </View>       
      </ScrollView>

      {/* Mini Player */}
      <View style={styles.miniPlayer}>
        <View style={styles.miniPlayerContent}>
          <View style={styles.miniPlayerLeft}>
            <Image 
              source={{ uri: 'assets/images/medo_e_delirio.jpeg' }}
              style={styles.miniPlayerImage}
            />
            <View style={styles.miniPlayerInfo}>
              <Text style={styles.miniPlayerTitle}>II - 2025.08 Tudo com...</Text>
              <Text style={styles.miniPlayerArtist}>Medo e Delírio em Brasília</Text>
            </View>
          </View>
          <View style={styles.miniPlayerControls}>
            <TouchableOpacity style={styles.miniPlayerButton}>
              <Devices size={30} color='white' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.miniPlayerButton}>
              <PlusCircle size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.miniPlayerButton}>
              <Play size={29} color='white' weight='fill' />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.progressBar} />
      </View>

      {/* Barra de navegação inferior */}
      <View style={styles.bottomNavigation}>
        <View style={styles.gradientOverlay} />
        <TouchableOpacity style={styles.navItem}>
          <House size={30} color="#BEBEBE" />
          <Text style={styles.navLabel}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
          <MagnifyingGlass size={30} color="#FFFFFF" weight='fill'/>
          <Text style={[styles.navLabel, styles.navLabelActive]}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <BookBookmark size={30} color="#BEBEBE" />
          <Text style={styles.navLabel}>Sua Biblioteca</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Plus size={30} color="#BEBEBE" />
          <Text style={styles.navLabel}>Criar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SpotifySearch;