import "./App.css";
import { CountOccurences } from "./reducing/CountOccurences";
import { AdminsOnly } from "./filtering/AdminsOnly";
import { CaseInsensitive } from "./filtering/CaseInsensitive";
import { EmptyState } from "./filtering/EmptyState";
import { EvensOnly } from "./filtering/EvensOnly";
import { LongWordsOnly } from "./filtering/LongWordsOnly";
import { SearchSimulation } from "./filtering/SearchSimulation";
import { CapitalizeWords } from "./mapping/CapitalizeWords";
import { DoubleNumbers } from "./mapping/DoubleNumbers";
import { FormatPrices } from "./mapping/FormatPrices";
import { RenderFruitList } from "./mapping/FruitList";
import { FullNames } from "./mapping/FullNames";
import { RankedList } from "./mapping/RankedList";
import { Stats } from "./reducing/Stats";
import { SumNumbers } from "./reducing/SumNumbers";
import { CountItems } from "./reducing/CountItems";
import { InventoryValue } from "./reducing/InventoryValue";
import { HighestScore } from "./reducing/HighestScore";
import { ActiveUserCount } from "./reducing/ActiveUserCount";
import { CategorySum } from "./reducing/CategorySum";
 
const App=()=>{
  return (
    <div style={{ color: "black", backgroundColor: "gray" }}>
      <CountOccurences />
      <AdminsOnly/>
      <CaseInsensitive/>
      <EmptyState/>
      <EvensOnly/>
      <LongWordsOnly/>
      <SearchSimulation/>
      <CapitalizeWords/>
      <CountOccurences/>
      <DoubleNumbers/>
      <FormatPrices/>
      <RenderFruitList/>
      <FullNames/>
      <RankedList/>
      <Stats/>
      <SumNumbers/>
      <CountItems/>
      <InventoryValue/>
      <HighestScore/>
      <ActiveUserCount/>
      <CategorySum/>
    </div>
  );
}

export default App;
