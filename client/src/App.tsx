/*
 * DESIGN PHILOSOPHY: Warm Editorial Finance
 * Single-page landing — no auth, no Google, no routing complexity.
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Landing from "./pages/Landing";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Legal from "./pages/Legal";
import Info from "./pages/Info";
import BudgetTemplate from "./pages/BudgetTemplate";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Landing} />
      <Route path={"/features"} component={Features} />
      <Route path={"/pricing"} component={Pricing} />
      <Route path={"/legal"} component={Legal} />
      <Route path={"/info"} component={Info} />
      <Route path={"/budget-template"} component={BudgetTemplate} />
      <Route component={Landing} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
