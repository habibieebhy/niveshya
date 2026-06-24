export default function Footer() {
  return (
    <footer className="border-t py-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">

        <div>
          <h3 className="font-semibold">
            Niveshya
          </h3>

          <p className="text-sm text-muted-foreground">
            Investment Intelligence
          </p>
        </div>

        <div className="flex items-center gap-6">
          <p className="text-sm text-muted-foreground hidden sm:block">
            © 2026 Niveshya
          </p>
          
          <img 
            src="/footer.png" 
            alt="Footer Logo" 
            className="h-14 w-auto object-contain drop-shadow-md transition-transform duration-300 hover:scale-105"
          />
        </div>

      </div>
    </footer>
  );
}