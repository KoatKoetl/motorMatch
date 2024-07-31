import { useEffect, useState } from "react";
import ProductCard from "../components/card/ProductCard";
import Loading from "../components/Loading";
import NotDataFound from "../components/NotDataFound";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useGetProductsQuery } from "../redux/api";
import { TProduct } from "../type";
import { Search } from "lucide-react";
import useDebounce from "../hooks/useDebounce";

export function SortBy() {
  return (
    <Select>
      <SelectTrigger className="max-w-[180px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Price sort</SelectLabel>
          <SelectItem value="low-to-high">Low to High</SelectItem>
          <SelectItem value="high-to-low">High to Low</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default function Products() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [search, setSearch] = useState("");
  // const [dataArr, setDataArr] = useState([]);

  const debounceValue = useDebounce(search);
  const { data, isFetching, isSuccess } = useGetProductsQuery(debounceValue);

  useEffect(() => {
    console.log(isFetching);
  }, [debounceValue, isFetching]);

  return (
    <div>
      <div className="my-10 flex justify-between flex-wrap">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="search"
            className="pl-10"
            placeholder="search by name, brand"
          />
          <Search className="text-xs text-zinc-500 absolute" />
        </div>
        <SortBy />
      </div>

      {isFetching ? (
        <Loading />
      ) : isSuccess && data?.data.length ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-5 my-10">
          {data?.data?.map((product: TProduct, index: number) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      ) : (
        <NotDataFound />
      )}
    </div>
  );
}
