import { Dimensions, StyleSheet } from 'react-native';

// Obter as dimensões da tela para layouts responsivos
const { width: screenWidth } = Dimensions.get('window');

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
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerRight: {
    padding: 8,
  },

  // Estilos da barra de pesquisa
  searchContainer: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchIcon: {
    fontSize: 20,
    color: '#666666',
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
    fontWeight: '500',
  },

  // Estilos do conteúdo principal
  content: {
    flex: 1,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginBottom: 16,
  },

  // Estilos dos cards de descoberta
  discoveryScrollView: {
    paddingLeft: 16,
  },
  discoveryScrollContent: {
    paddingRight: 16,
  },
  discoveryCard: {
    width: 109,
    height: 193,
    marginRight: 16,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
  },
  discoveryCardImage: {
    width: '100%',
    height: '100%',
  },
  discoveryCardOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Overlay escuro para melhor legibilidade
  },
  discoveryCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },

  // Estilos da grade de navegação
  navigationGrid: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  navigationSection: {
    width: (screenWidth - 48) / 2, // Largura responsiva (2 colunas com margens)
    marginBottom: 16,
  },
  navigationSectionContent: {
    height: 100,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 16,
    overflow: 'hidden',
    position: 'relative',
  },
  navigationSectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  navigationSectionImage: {
    width: 60,
    height: 60,
    position: 'absolute',
    right: -10,
    top: 20,
    transform: [{ rotate: '25deg' }], // Rotação para efeito visual
  },

  // Espaçamento inferior
  bottomSpacer: {
    height: 100, // Espaço para o mini player
  },

  // Estilos do mini player
  miniPlayer: {
    backgroundColor: '#282828',
    paddingHorizontal: 16,
    paddingVertical: 12,
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
    backgroundColor: '#1DB954',
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
    width: '45%', // Simula progresso
  },

  // Estilos da navegação inferior
  bottomNavigation: {
    flexDirection: 'row',
    backgroundColor: '#000000',
    paddingVertical: 8,
    paddingBottom: 20, // Espaço extra para dispositivos com home indicator
    borderTopWidth: 1,
    borderTopColor: '#333333',
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
   // Estilo para item ativo (Buscar)
  },
  navIcon: {
    fontSize: 20,
    marginBottom: 4,
    color: '#B3B3B3',
  },
  navLabel: {
    color: '#BEBEBE',
    fontSize: 10,
    textAlign: 'center',
    fontWeight: '500',
  },
  navLabelActive: {
    color: '#FFFFFF', // Branco para o item ativo
  },
});