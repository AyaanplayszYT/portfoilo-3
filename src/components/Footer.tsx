const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 Portfolio. All rights reserved.
          </div>
          <div className="text-sm text-muted-foreground">
            Built with passion and creativity
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
