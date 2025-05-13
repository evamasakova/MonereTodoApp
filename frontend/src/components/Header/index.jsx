import "./header.css";
export default function Header() {
  return (
    <>
      <header class="bg-white">
        <nav
          class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div class="flex lg:flex-1">
            <h1 class="-m-1.5 p-1.5">
              Monere
            </h1>
          </div>

          <div class="hidden lg:flex lg:flex-1 lg:justify-end">
            <h2 class="">
              Your Todo List
            </h2>
          </div>
        </nav>
      </header>
    </>
  );
}
