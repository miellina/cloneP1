import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // Container principal
  container: {
    flex: 1,
    backgroundColor: '#121212', // Cor de fundo escura do Spotify
  },

  // Estilos do cabeçalho
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 50, // Espaço para a status bar
    paddingBottom: 16,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 12,
    backgroundColor: '#666666',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerButton: {
    marginLeft: 16,
    padding: 4,
  },
  headerButtonText: {
    color: '#FFFFFF',
    fontSize: 24,
  },

  // Estilos dos filtros
  filtersContainer: {
    paddingLeft: 16,
    marginBottom: 16,
    maxHeight: 50,
  },
  filtersContent: {
    paddingRight: 16,
    alignItems: 'center',
  },
  filterButton: {
    backgroundColor: '#282828',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    height: 36,
    justifyContent: 'center',
  },
  filterButtonActive: {
    backgroundColor: '#1DB954', // Verde do Spotify para botão ativo
  },
  filterButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  filterButtonTextActive: {
    color: '#000000', // Texto preto para botão ativo
    fontWeight: 'bold',
  },

  // Estilos da seção Recentes
  recentesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  recentesLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recentesIcon: {
    color: '#FFFFFF',
    fontSize: 18,
    marginRight: 8,
    fontWeight: 'bold',
  },
  recentesTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  gridIcon: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  // Estilos da lista da biblioteca
  libraryList: {
    flex: 1,
    paddingHorizontal: 16,
  },
  libraryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingVertical: 4,
  },
  itemImage: {
    width: 56,
    height: 56,
    borderRadius: 8,
    marginRight: 12,
  },
  itemInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  itemTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  subtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  // podcastIndicator: {
  //   width: 8,
  //   height: 8,
  //   backgroundColor: '#1DB954', // Verde do Spotify
  //   borderRadius: 4,
  //   marginRight: 8,
  // },
  itemSubtitle: {
    color: '#B3B3B3',
    fontSize: 14,
    fontWeight: '400',
  },

  // Estilos da seção novos episódios
  newEpisodesSection: {
    marginTop: 24,
    marginBottom: 16,
  },
  newEpisodesHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
  },
  newEpisodesIconContainer: {
    width: 56,
    height: 56,
    backgroundColor: '#8B5FBF', // Roxo para novos episódios
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  newEpisodesIcon: {
    fontSize: 24,
  },
  newEpisodesInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  newEpisodesTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  newEpisodesSubtitle: {
    color: '#B3B3B3',
    fontSize: 14,
    fontWeight: '400',
  },

  // Espaçamento inferior
  bottomSpacer: {
    height: 20,
  },

  // Estilos do mini player
  miniPlayer: {
    backgroundColor: '#282828',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#333333',
  },
  miniPlayerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  miniPlayerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  miniPlayerImage: {
    width: 48,
    height: 48,
    borderRadius: 4,
    marginRight: 12,
    backgroundColor: '#333333',
  },
  miniPlayerInfo: {
    flex: 1,
  },
  miniPlayerTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 2,
  },
  miniPlayerArtist: {
    color: '#B3B3B3',
    fontSize: 12,
    fontWeight: '400',
  },
  miniPlayerControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  miniPlayerButton: {
    marginLeft: 3,
    padding: 4,
  },
  miniPlayerButtonText: {
    fontSize: 20,
  },
  progressBar: {
    height: 2,
    backgroundColor: '#1DB954', // Verde do Spotify
    marginTop: 8,
    width: '76%', // Simula progresso da música
  },

  // Estilos da navegação inferior
  bottomNavigation: {
  flexDirection: 'row',
  backgroundColor: 'transparent',
  paddingVertical: 8,
  paddingBottom: 20,
  borderTopWidth: 1,
  position: 'relative',
},
gradientOverlay: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.3)',
  zIndex: -1,
},
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 4,
  },
  navItemActive: {
    // Estilo para item ativo (Sua Biblioteca)
  },
  navIcon: {
    fontSize: 20,
    marginBottom: 4,
    color: '#B3B3B3',
  },
  navLabel: {
    color: '#B3B3B3',
    fontSize: 10,
    textAlign: 'center',
    fontWeight: '500',
  },
  navLabelActive: {
    color: '#FFFFFF', // Branco para o item ativo
    fontWeight: 'bold',
  },
});