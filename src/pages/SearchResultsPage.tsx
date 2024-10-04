import SearchResultCard from "@/components/SearchResultCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SearchResultsPage() {
  return (
    <div className="w-full max-w-[814px]">
      <section className="my-7 flex w-full items-center justify-between">
        <h1 className="text-lg font-semi-bold">Found 12 results</h1>
        <Select>
          <SelectTrigger className="w-[180px] focus-visible:border-none">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ratings">Light</SelectItem>
            <SelectItem value="price:ascending">Price: Low to High</SelectItem>
            <SelectItem value="price:descending">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </section>
      <section className="mb-20 grid gap-y-5">
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
      </section>
    </div>
  );
}

export default SearchResultsPage;
