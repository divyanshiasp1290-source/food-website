import { r as reactExports } from "../_libs/react.mjs";
function SearchRedirectPage() {
  reactExports.useEffect(() => {
    if (typeof window !== "undefined") {
      window.location.replace("/");
    }
  }, []);
  return null;
}
export {
  SearchRedirectPage as component
};
