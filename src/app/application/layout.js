export default function ApplicationLayout({ children }) {
    return (
      <div>
        <header>
          <h1>Mars Visit Application</h1>
        </header>
        <main>{children}</main>
        <footer>
          {/* You could add a step indicator or global navigation buttons here */}
        </footer>
      </div>
    );
  }
  