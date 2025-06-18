import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Blog with YouTube Playlist</title>
        <meta name="description" content="A simple blog with YouTube playlist embed" />
      </Head>

      {/* Header */}
      <header style={{ background: '#111', color: '#fff', padding: '1rem', textAlign: 'center' }}>
        <h1>My Blog</h1>
        <p>Welcome to the video-powered blog!</p>
      </header>

      {/* Main Content */}
      <main style={{ padding: '2rem', maxWidth: '960px', margin: 'auto' }}>
        <h2>Featured Playlist</h2>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
          <iframe
            src="https://www.youtube.com/embed/videoseries?list=PLLTaeIyWEtsE5bXKfX9a6ZyBtkF5CCGRw"
            title="YouTube Playlist"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
            }}
          ></iframe>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ background: '#f5f5f5', color: '#333', padding: '1rem', textAlign: 'center' }}>
        <p>&copy; 2025 My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}
