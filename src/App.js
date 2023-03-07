import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import SearchableFoodList from "./components/SearchableFoodList";
import ChemicalCollection from "./components/ChemicalCollection";
import LabelReader from "./components/LabelReader";

function App() {
  const migraineFoodList = [
    { name: "Avocados", chemicals: ["Tyramine"] },
    { name: "Beets", chemicals: ["Nitrates"] },
    { name: "Eggplants", chemicals: ["Histamine ", "Tyramine", " Nitrites"] },
    { name: "Fava Beans or Broad Beans", chemicals: ["Tyramine"] },
    { name: "Green Peas", chemicals: ["Tyramine"] },
    { name: "Olives", chemicals: ["Histamine", " Tyramine"] },
    {
      name: "Onions",
      chemicals: [
        "None of the known migraine triggers, but listed in traditional migraine diets",
      ],
    },
    { name: "Potatos", chemicals: ["Tyramine"] },
    { name: "Pumpkins", chemicals: ["Histamine"] },
    { name: "Snow Peas", chemicals: ["Tyramine"] },
    { name: "Spinach", chemicals: ["Histamine", " Nitrites"] },
    {
      name: "Tomatoes and All Tomato Products",
      chemicals: ["Histamine", " Tyramine", " Sulfites", " Nitrites"],
    },
    { name: "Apricots", chemicals: ["Histamine"] },
    { name: "Bananas", chemicals: ["Tyramine"] },
    { name: "Cherries", chemicals: ["Histamine"] },
    {
      name: "Citrus: Oranges, Limes, Lemons, Grapefruit",
      chemicals: ["Histamine"],
    },
    { name: "Cranberries", chemicals: ["Histamine"] },
    { name: "Currants", chemicals: ["Histamine"] },
    { name: "Dates", chemicals: ["Histamine"] },
    { name: "Grapes", chemicals: ["Sulfites"] },
    { name: "Loganberries", chemicals: ["Histamine"] },
    { name: "Mulberries", chemicals: ["Histamine"] },
    { name: "Nectarines", chemicals: ["Histamine"] },
    { name: "Papayas", chemicals: ["Histamine"] },
    { name: "Peaches", chemicals: ["Histamine"] },
    { name: "Pineapples", chemicals: ["Histamine"] },
    { name: "Plums", chemicals: ["Histamine", " Tyramine"] },
    { name: "Prunes", chemicals: ["Histamine", " Tyramine", " Sulfites"] },
    { name: "Raisins", chemicals: ["Histamine", " Tyramine", " Sulfites"] },
    { name: "Raspberries", chemicals: ["Histamine", " Tyramine"] },
    { name: "Strawberries", chemicals: ["Histamine"] },
    { name: "Any Overripe Fruit", chemicals: ["Tyramine"] },
    {
      name: "Any Dried Fruit that doesn't say sulfite-free on the packaging",
      chemicals: ["Sulfites"],
    },
    {
      name: "Cured, smoked, aged, processed, canned, or tenderized meats—like bacon, hot dogs, prosciutto, pepperoni, lunch meat, etc.",
      chemicals: ["Histamine", " Tyramine", " Nitrates"],
    },
    {
      name: "Pre-Ground Meat",
      chemicals: [
        "Histamine",
        " ...though, if you grind it yourself or have a butcher grind it right before you buy it, ground meat should be OK.",
      ],
    },
    {
      name: "Old or Leftover Meat",
      chemicals: [
        "Histamine",
        " Tyramine",
        "Meat should be cooked or frozen within a day of purchasing, cooked leftovers should be frozen immediately.",
      ],
    },
    { name: "Liver from Any Animal", chemicals: ["Histamine", " Tyramine"] },
    { name: "Any Game Meat", chemicals: ["Histamine", " Tyramine"] },
    { name: "All Fish and Shellfish", chemicals: ["Histamine"] },
    { name: "Raw Egg Whites", chemicals: ["Histamine"] },
    {
      name: "Any Fermented Dairy Products (Cheese, Sour Cream, Processed Cheese, Buttermilk, Yogurt, Kefir",
      chemicals: ["Histamine", " MSG", " Tyramine"],
    },
    {
      name: "Soybeans and All Soy Products",
      chemicals: ["Histamine", " Sulfites"],
    },
    { name: "Red Beans", chemicals: ["Histamine"] },
    { name: "Bleached Flour", chemicals: ["Histamine"] },
    { name: "Modified Flour", chemicals: ["Sulfites"] },
    { name: "Modified Gluten", chemicals: ["Sulfites"] },
    { name: "Barley Malt", chemicals: ["Sulfites"] },
    {
      name: "Vinegar",
      chemicals: [
        "Histamine",
        " Tyramine",
        " Nitrites",
        " Nitrates",
        " Sulfites",
      ],
    },
    {
      name: "Any Fats or Oils that containe color and/or preservatives",
      chemicals: ["Histamine"],
    },
    { name: "Soybean Oil", chemicals: [""] },
    { name: "Margarine", chemicals: [""] },
    {
      name: "Prepared Salad Dressings with Restricted Ingredients (which are most of them)",
      chemicals: [""],
    },
    { name: "Prepared Gravies", chemicals: [""] },
    {
      name: "Prepared Condiments and Relishes, including Ketchup, Mustard, Sauerkraut",
      chemicals: ["Histamine", " Sulfites", " MSG"],
    },
    { name: "Soy Sauce", chemicals: ["Histamine", " MSG", " Tyramine"] },
    { name: "Teriyaki Sauce", chemicals: ["Tyramine"] },
    { name: "Fish Sauce", chemicals: ["Tyramine", " MSG"] },
    { name: "Anise", chemicals: ["Histamine"] },
    { name: "Cinnamon", chemicals: ["Histamine"] },
    { name: "Cloves", chemicals: ["Histamine"] },
    { name: "Curry Powder", chemicals: ["Histamine"] },
    { name: "Hot Paprika", chemicals: ["Histamine"] },
    { name: "Nutmeg", chemicals: ["Histamine"] },
    {
      name: 'Prepared Foods Labeled "With Spices"',
      chemicals: ["Histamine", " MSG"],
    },
    { name: "All Chocolate and Cocoa", chemicals: ["Histamine"] },
    { name: "Flavored Gelatin", chemicals: ["Histamine"] },
    { name: "Artificial Sweeteners", chemicals: ["Histamine"] },
    { name: "Flavored Syrups", chemicals: ["Histamine"] },
    { name: "Prepared Dessert Fillings", chemicals: ["Histamine"] },
    { name: "Prepared Icing or Frosting", chemicals: ["Histamine"] },
    { name: "Cake Decorations", chemicals: ["Histamine"] },
    { name: "Commercial Candies", chemicals: ["Histamine"] },
    { name: "Mincemeat", chemicals: ["Histamine"] },
    { name: "Miso", chemicals: ["Histamine", " Tyramine"] },
    {
      name: "Pickles",
      chemicals: ["Histamine", " Tyramine", " Sulfites", " Nitrites", " MSG"],
    },
    { name: "Anything Fermented", chemicals: ["Histamine", " Tyramine"] },
    { name: "Coleslaw", chemicals: ["Nitrates", " Sulfites"] },
    {
      name: "Fruit Juices and Cocktails made with Restricted Ingredients",
      chemicals: ["Histamine"],
    },
    {
      name: "Carbonated Beverages other than Mineral Water",
      chemicals: ["Histamine"],
    },
    { name: "Soda", chemicals: ["Caffeine", " Sulfites", " Histamine"] },
    {
      name: "Coffee",
      chemicals: [
        "Caffeine",
        "Decaf is ok, only if it is decaffeinated without chemicals.",
      ],
    },
    { name: "Tea", chemicals: ["Histamine", " Caffeine"] },
    {
      name: 'All Drinks with "Flavor" or "Spices"',
      chemicals: ["Histamine", " MSG"],
    },
    { name: "Fermented Beverages", chemicals: ["Histamine", " Tyramine"] },
    { name: "All Alcohol", chemicals: ["Histamine", " Tyramine"] },
    { name: "Potassium Hydrogen Sulfite", chemicals: ["Sulfite"] },
    { name: "Potassium Meatbisulfite", chemicals: ["Sulfite"] },
    { name: "Potassium Sulfite", chemicals: ["Sulfite"] },
    { name: "Preservatives", chemicals: ["Histmaine", " MSG"] },
    { name: "Sodium Bisulfite", chemicals: ["Sulfite"] },
    { name: "Sodium Hydrogen Sulfite ", chemicals: ["Sulfite"] },
    { name: "Sodium Meatbisulfite", chemicals: ["Sulfite"] },
    { name: "Sodium Sulfite", chemicals: ["Sulfite"] },
    { name: "Sulfite Ammonia Caramel", chemicals: ["Sulfite"] },
    { name: "Sulfur Dioxide", chemicals: ["Sulfite"] },
    {
      name: "Yeast, Yeast Extract, Brewer's Yeast, Nutritional Yeast",
      chemicals: ["Tyramine", " MSG"],
    },
  ];
  const [search, setSearch] = useState("All");
  const foodsToDisplay = migraineFoodList.filter((food) =>
    food.name.includes(search)
  );

  function handleSearchChange(newSearch) {
    return setSearch(newSearch);
  }
  return (
    <div>
      <nav className="navBar">
        <Link to="/">Chemical Collection</Link>
        <Link to="/search">Searchable Food List</Link>
        <Link to="/reader">Label Reader</Link>
      </nav>

      <Switch>
        <Route exact path="/">
          <ChemicalCollection />
        </Route>
        <Route path="/search">
          <SearchableFoodList
            migraineFoodList={migraineFoodList}
            search={search}
            onSearchChange={handleSearchChange}
          />
        </Route>
        <Route path="/reader">
          <LabelReader migraineFoodList={migraineFoodList} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
