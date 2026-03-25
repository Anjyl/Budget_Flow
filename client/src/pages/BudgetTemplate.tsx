import { ArrowLeft, Plus, Trash2, Download } from "lucide-react";
import { useLocation } from "wouter";
import { useState } from "react";

interface BudgetItem {
  id: string;
  category: string;
  budgeted: number;
  actual: number;
}

interface GroceryWeek {
  week: number;
  budget: number;
  spent: number;
}

export default function BudgetTemplate() {
  const [, navigate] = useLocation();
  const [salary, setSalary] = useState(0);
  const [savings, setSavings] = useState(0);
  const [budgetItems, setBudgetItems] = useState<BudgetItem[]>([
    { id: "1", category: "Rent/Mortgage", budgeted: 0, actual: 0 },
    { id: "2", category: "Utilities", budgeted: 0, actual: 0 },
    { id: "3", category: "Groceries", budgeted: 0, actual: 0 },
    { id: "4", category: "Transport", budgeted: 0, actual: 0 },
    { id: "5", category: "Entertainment", budgeted: 0, actual: 0 },
    { id: "6", category: "Insurance", budgeted: 0, actual: 0 },
  ]);
  const [groceryWeeks, setGroceryWeeks] = useState<GroceryWeek[]>([
    { week: 1, budget: 0, spent: 0 },
    { week: 2, budget: 0, spent: 0 },
    { week: 3, budget: 0, spent: 0 },
    { week: 4, budget: 0, spent: 0 },
  ]);
  const [fuelLitres, setFuelLitres] = useState(0);

  const FUEL_PRICE_PER_LITRE = 20.19; // South African Rands
  const fuelCost = fuelLitres * FUEL_PRICE_PER_LITRE;

  const totalBudgeted = budgetItems.reduce((sum, item) => sum + item.budgeted, 0);
  const totalActual = budgetItems.reduce((sum, item) => sum + item.actual, 0);
  const totalIncome = salary + savings;
  const totalRemaining = totalIncome - totalActual;
  const groceryBudgetTotal = groceryWeeks.reduce((sum, w) => sum + w.budget, 0);
  const grocerySpentTotal = groceryWeeks.reduce((sum, w) => sum + w.spent, 0);

  const updateBudgetItem = (id: string, field: "budgeted" | "actual", value: number) => {
    setBudgetItems(budgetItems.map((item) => (item.id === id ? { ...item, [field]: value } : item)));
  };

  const updateGroceryWeek = (week: number, field: "budget" | "spent", value: number) => {
    setGroceryWeeks(groceryWeeks.map((w) => (w.week === week ? { ...w, [field]: value } : w)));
  };

  const addBudgetItem = () => {
    const newId = String(Math.max(...budgetItems.map((i) => parseInt(i.id)), 0) + 1);
    setBudgetItems([...budgetItems, { id: newId, category: "New Category", budgeted: 0, actual: 0 }]);
  };

  const removeBudgetItem = (id: string) => {
    setBudgetItems(budgetItems.filter((item) => item.id !== id));
  };

  const downloadAsCSV = () => {
    let csv = "BudgetFlow Monthly Budget Template\n\n";
    csv += "INCOME\n";
    csv += `Salary,R${salary.toFixed(2)}\n`;
    csv += `Savings,R${savings.toFixed(2)}\n`;
    csv += `Total Income,R${totalIncome.toFixed(2)}\n\n`;

    csv += "EXPENSES\n";
    csv += "Category,Budgeted,Actual\n";
    budgetItems.forEach((item) => {
      csv += `${item.category},R${item.budgeted.toFixed(2)},R${item.actual.toFixed(2)}\n`;
    });
    csv += `Total,R${totalBudgeted.toFixed(2)},R${totalActual.toFixed(2)}\n\n`;

    csv += "SUMMARY\n";
    csv += `Total Income,R${totalIncome.toFixed(2)}\n`;
    csv += `Total Expenses,R${totalActual.toFixed(2)}\n`;
    csv += `Remaining,R${totalRemaining.toFixed(2)}\n\n`;

    csv += "GROCERIES (Weekly)\n";
    csv += "Week,Budget,Spent\n";
    groceryWeeks.forEach((w) => {
      csv += `Week ${w.week},R${w.budget.toFixed(2)},R${w.spent.toFixed(2)}\n`;
    });
    csv += `Total,R${groceryBudgetTotal.toFixed(2)},R${grocerySpentTotal.toFixed(2)}\n\n`;

    csv += "FUEL CALCULATOR\n";
    csv += `Litres,${fuelLitres}\n`;
    csv += `Price per Litre,R${FUEL_PRICE_PER_LITRE.toFixed(2)}\n`;
    csv += `Total Cost,R${fuelCost.toFixed(2)}\n`;

    const element = document.createElement("a");
    element.setAttribute("href", "data:text/csv;charset=utf-8," + encodeURIComponent(csv));
    element.setAttribute("download", "BudgetFlow_Template.csv");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700">
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-18">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-semibold">Back</span>
            </button>
            <h1 className="text-lg md:text-xl font-bold">Budget Template</h1>
            <button
              onClick={downloadAsCSV}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Download className="w-5 h-5" />
              <span className="text-sm font-semibold hidden sm:inline">Export</span>
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="pt-24 pb-20">
        <div className="container max-w-4xl">
          {/* Income Section */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 mb-6">
            <h2 className="text-2xl font-bold mb-6">Monthly Income</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Salary (R)</label>
                <input
                  type="number"
                  value={salary}
                  onChange={(e) => setSalary(parseFloat(e.target.value) || 0)}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-400"
                  placeholder="0.00"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Savings (R)</label>
                <input
                  type="number"
                  value={savings}
                  onChange={(e) => setSavings(parseFloat(e.target.value) || 0)}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-400"
                  placeholder="0.00"
                />
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-700">
              <p className="text-sm text-slate-300">Total Income</p>
              <p className="text-3xl font-bold text-blue-400">R{totalIncome.toFixed(2)}</p>
            </div>
          </div>

          {/* Budget Items Section */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Monthly Expenses</h2>
              <button
                onClick={addBudgetItem}
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors text-sm"
              >
                <Plus className="w-4 h-4" />
                Add
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 px-2 text-slate-300 font-semibold">Category</th>
                    <th className="text-right py-3 px-2 text-slate-300 font-semibold">Budgeted</th>
                    <th className="text-right py-3 px-2 text-slate-300 font-semibold">Actual</th>
                    <th className="text-right py-3 px-2 text-slate-300 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {budgetItems.map((item) => (
                    <tr key={item.id} className="border-b border-slate-700 hover:bg-slate-700/30">
                      <td className="py-3 px-2">
                        <input
                          type="text"
                          value={item.category}
                          onChange={(e) =>
                            setBudgetItems(
                              budgetItems.map((i) =>
                                i.id === item.id ? { ...i, category: e.target.value } : i
                              )
                            )
                          }
                          className="w-full bg-transparent text-white focus:outline-none"
                        />
                      </td>
                      <td className="py-3 px-2">
                        <input
                          type="number"
                          value={item.budgeted}
                          onChange={(e) => updateBudgetItem(item.id, "budgeted", parseFloat(e.target.value) || 0)}
                          className="w-full bg-slate-700 border border-slate-600 rounded px-2 py-1 text-white text-right focus:outline-none focus:border-blue-400"
                          placeholder="0.00"
                        />
                      </td>
                      <td className="py-3 px-2">
                        <input
                          type="number"
                          value={item.actual}
                          onChange={(e) => updateBudgetItem(item.id, "actual", parseFloat(e.target.value) || 0)}
                          className="w-full bg-slate-700 border border-slate-600 rounded px-2 py-1 text-white text-right focus:outline-none focus:border-blue-400"
                          placeholder="0.00"
                        />
                      </td>
                      <td className="py-3 px-2 text-right">
                        <button
                          onClick={() => removeBudgetItem(item.id)}
                          className="text-red-400 hover:text-red-300 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-700 grid sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-300">Total Budgeted</p>
                <p className="text-2xl font-bold text-slate-300">R{totalBudgeted.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-sm text-slate-300">Total Actual</p>
                <p className="text-2xl font-bold text-slate-300">R{totalActual.toFixed(2)}</p>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">Summary</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-slate-300">Total Income</p>
                <p className="text-2xl font-bold text-blue-400">R{totalIncome.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-sm text-slate-300">Total Expenses</p>
                <p className="text-2xl font-bold text-slate-300">R{totalActual.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-sm text-slate-300">Remaining</p>
                <p className={`text-2xl font-bold ${totalRemaining >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                  R{totalRemaining.toFixed(2)}
                </p>
              </div>
            </div>
          </div>

          {/* Weekly Groceries Section */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 mb-6">
            <h2 className="text-2xl font-bold mb-6">Weekly Groceries Budget</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 px-2 text-slate-300 font-semibold">Week</th>
                    <th className="text-right py-3 px-2 text-slate-300 font-semibold">Budget</th>
                    <th className="text-right py-3 px-2 text-slate-300 font-semibold">Spent</th>
                    <th className="text-right py-3 px-2 text-slate-300 font-semibold">Remaining</th>
                  </tr>
                </thead>
                <tbody>
                  {groceryWeeks.map((week) => (
                    <tr key={week.week} className="border-b border-slate-700 hover:bg-slate-700/30">
                      <td className="py-3 px-2">Week {week.week}</td>
                      <td className="py-3 px-2">
                        <input
                          type="number"
                          value={week.budget}
                          onChange={(e) => updateGroceryWeek(week.week, "budget", parseFloat(e.target.value) || 0)}
                          className="w-full bg-slate-700 border border-slate-600 rounded px-2 py-1 text-white text-right focus:outline-none focus:border-blue-400"
                          placeholder="0.00"
                        />
                      </td>
                      <td className="py-3 px-2">
                        <input
                          type="number"
                          value={week.spent}
                          onChange={(e) => updateGroceryWeek(week.week, "spent", parseFloat(e.target.value) || 0)}
                          className="w-full bg-slate-700 border border-slate-600 rounded px-2 py-1 text-white text-right focus:outline-none focus:border-blue-400"
                          placeholder="0.00"
                        />
                      </td>
                      <td className="py-3 px-2 text-right">
                        <span className={week.budget - week.spent >= 0 ? "text-emerald-400" : "text-red-400"}>
                          R{(week.budget - week.spent).toFixed(2)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-700 grid sm:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-slate-300">Total Budget</p>
                <p className="text-xl font-bold">R{groceryBudgetTotal.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-sm text-slate-300">Total Spent</p>
                <p className="text-xl font-bold">R{grocerySpentTotal.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-sm text-slate-300">Total Remaining</p>
                <p className={`text-xl font-bold ${groceryBudgetTotal - grocerySpentTotal >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                  R{(groceryBudgetTotal - grocerySpentTotal).toFixed(2)}
                </p>
              </div>
            </div>
          </div>

          {/* Fuel Calculator Section */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Fuel Calculator</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Litres</label>
                <input
                  type="number"
                  value={fuelLitres}
                  onChange={(e) => setFuelLitres(parseFloat(e.target.value) || 0)}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-400"
                  placeholder="0.00"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Price per Litre (R)</label>
                <input
                  type="number"
                  value={FUEL_PRICE_PER_LITRE}
                  disabled
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-slate-400 cursor-not-allowed"
                />
              </div>
            </div>
            <div className="pt-4 border-t border-slate-700">
              <p className="text-sm text-slate-300">Total Fuel Cost</p>
              <p className="text-3xl font-bold text-blue-400">R{fuelCost.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
