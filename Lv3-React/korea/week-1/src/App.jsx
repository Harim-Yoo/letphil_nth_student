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
    </div>
  );
}

export default App;
