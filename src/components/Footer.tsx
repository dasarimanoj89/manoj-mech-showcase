const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Dasari Manoj. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Mechanical Engineer | Innovator | Problem Solver
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
