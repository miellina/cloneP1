import { ArrowsDownUp, BookBookmark, Devices, Headphones, House, MagnifyingGlass, Play, Plus, PlusCircle, PushPin, SquaresFour } from 'phosphor-react-native';
import React from 'react';
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/SpotifyLibraryStyles';

// Interface para definir a estrutura dos itens da biblioteca
interface LibraryItem {
  id: string;
  title: string;
  subtitle: string;
  type: 'podcast' | 'playlist';
  imageUrl: string;
  backgroundColor: string;
}

// Interface para definir os botões de filtro
interface FilterButton {
  id: string;
  title: string;
  isActive: boolean;
}


// Componente principal da Biblioteca
const SpotifyLibrary: React.FC = () => {
  // Dados mockados dos itens da biblioteca
  const libraryItems: LibraryItem[] = [
    {
      id: '1',
      title: 'Medo e Delírio em Brasília',
      subtitle: ' Podcast • Central 3 Podcasts',
      type: 'podcast',
      imageUrl: 'medo_e_delirio',
      backgroundColor: '#1DB954',
    },
    {
      id: '2',
      title: 'Rádio Escafandro',
      subtitle: ' Podcast • Tomás Chiaverini',
      type: 'podcast',
      imageUrl: 'assets/images/radio_escafandro.jpeg',
      backgroundColor: '#E8E8E8',
    },
    {
      id: '3',
      title: 'Angu de Grilo',
      subtitle: ' Podcast • Angu de Grilo',
      type: 'podcast',
      imageUrl: 'assets/images/angu_de_grilo.jpeg',
      backgroundColor: '#FF6B35',
    },
    {
      id: '4',
      title: 'Músicas Curtidas',
      subtitle: ' Playlist • 10570 músicas',
      type: 'playlist',
      imageUrl: 'https://via.placeholder.com/56x56/8B5FBF/FFFFFF?text=♥',
      backgroundColor: '#8B5FBF',
    },
    {
      id: '5',
      title: 'Novos episódios',
      subtitle: ' Atualizado hoje',
      type: 'playlist',
      imageUrl: 'https://via.placeholder.com/56x56/8B5FBF/FFFFFF?text=♥',
      backgroundColor: '#704086',
    },
    {
      id: '6',
      title: 'A Hora',
      subtitle: ' Podcast • UOL',
      type: 'podcast',
      imageUrl: 'https://via.placeholder.com/56x56/8B5FBF/FFFFFF?text=♥',
      backgroundColor: 'gray',
    },
  ];

  // Dados dos botões de filtro
  const filterButtons: FilterButton[] = [
    { id: '1', title: 'Playlists', isActive: false },
    { id: '2', title: 'Podcasts', isActive: false },
    { id: '3', title: 'Álbuns', isActive: false },
    { id: '4', title: 'Artistas', isActive: false },
    { id: '5', title: 'Baixados', isActive: false },
  ];

  // Componente para renderizar cada item da biblioteca
  const LibraryItemComponent: React.FC<{ item: LibraryItem }> = ({ item }) => (
    <TouchableOpacity style={styles.libraryItem}>
      <Image 
        source={{ uri: item.imageUrl }}
        style={[styles.itemImage, { backgroundColor: item.backgroundColor }]}
      />
      <View style={styles.itemInfo}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <View style={styles.subtitleContainer}>
          <PushPin size={14}  color="#1DB954" weight="fill" />
          <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  // Componente para os botões de filtro
  const FilterButtonComponent: React.FC<{ filter: FilterButton }> = ({ filter }) => (
    <TouchableOpacity 
      style={[styles.filterButton, filter.isActive && styles.filterButtonActive]}
    >
      <Text style={[styles.filterButtonText, filter.isActive && styles.filterButtonTextActive]}>
        {filter.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Barra de status */}
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      
      {/* Cabeçalho */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Headphones size={30} color='white' weight='fill' />
          <Text style={styles.headerTitle}> Sua Biblioteca</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerButton}>
            <MagnifyingGlass size={30} color='white' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Plus size={30} color='white' />
          </TouchableOpacity>
        </View>
      </View>

      {/* Botões de filtro */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.filtersContainer}
        contentContainerStyle={styles.filtersContent}
      >
        {filterButtons.map((filter) => (
          <FilterButtonComponent key={filter.id} filter={filter} />
        ))}
      </ScrollView>

      {/* Seção Recentes */}
      <View style={styles.recentesHeader}>
        <View style={styles.recentesLeft}>
          <ArrowsDownUp size={20} color='white' />
          <Text style={styles.recentesTitle}> Recentes</Text>
        </View>
        <TouchableOpacity>
          <SquaresFour size={30} color='white' />
        </TouchableOpacity>
      </View>

      {/* Lista de itens da biblioteca */}
      <ScrollView style={styles.libraryList} showsVerticalScrollIndicator={false}>
        {libraryItems.map((item) => (
          <LibraryItemComponent key={item.id} item={item} />
        ))}
        
        {/* Seção "Novos episódios"
        <View style={styles.newEpisodesSection}>
          <TouchableOpacity style={styles.newEpisodesHeader}>
            <View style={styles.newEpisodesIconContainer}>
            </View>
            <View style={styles.newEpisodesInfo}>
              <Text style={styles.newEpisodesTitle}>Novos episódios</Text>
              <Text style={styles.newEpisodesSubtitle}>Atualizado hoje</Text>
            </View>
          </TouchableOpacity>
        </View> */}

        {/* Espaçamento para o mini player */}
        <View style={styles.bottomSpacer} />
      </ScrollView>

      {/* Mini Player */}
      <View style={styles.miniPlayer}>
        <View style={styles.miniPlayerContent}>
          <View style={styles.miniPlayerLeft}>
            <Image 
              source={{ uri: 'https://via.placeholder.com/48x48/333/FFFFFF?text=🎧' }}
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
        <TouchableOpacity style={styles.navItem}>
          <MagnifyingGlass size={30} color="#BEBEBE" />
          <Text style={styles.navLabel}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
          <BookBookmark size={30} color="#FFFFFF" weight="fill" />
          <Text style={[styles.navLabel, styles.navLabelActive]}>Sua Biblioteca</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Plus size={30} color="#BEBEBE" />
          <Text style={styles.navLabel}>Criar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default SpotifyLibrary;