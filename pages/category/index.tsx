import { GetStaticProps } from "next";
import Link from "next/link";

import { Category } from "../../model/category";
import SideBar from "../../components/Categories/SideBar";
import Products from "../../components/Products/Products";
import CategoryAPI from "../../api/category/category";
import Rating from "../../components/Products/Rating";
import PriceRange from "../../components/PriceRange/PriceRange";
import Wrapper from "../../components/Wrapper/Wrapper";
import * as path from "../../constants/paths"


const Categories = (props: any) => {
  console.log("props", props)
  const categories = props.categories;


  const clickedRating = (rating:any) => {
    console.log(rating)
  }
  return (
    <Wrapper>
      <div className="flex">
        <div className="w-80  ml-24 mt-4">
          <SideBar />
          {categories &&
            categories.map((category: any) => {
              return (
                <Link
                  href={{
                    pathname: `${path.CATEGORIES}/${category[Object.keys(category)[0]].name}`,
                    query: { categories: categories },
                  }}
                >
                  <h1 className="text-[#1C1F22] font-comfortaa text-s px-3 mt-2 mb-2">
                    {category[Object.keys(category)[0]].name}
                  </h1>
                </Link>
              );
            })}

          <h1 className="font-unica text-2xl px-3 mt-8 mb-4">RATING</h1>

            <div className="flex items-center px-3 mb-2">
            <Rating stars={5} clickedRating={clickedRating}/>
          </div>
          <div className="flex items-center px-3 mb-2">
            <Rating stars={4} clickedRating={clickedRating}/>
          </div>
          <div className="flex items-center px-3 mb-2">
            <Rating stars={3} clickedRating={clickedRating}/>
          </div>

          <h1 className="font-unica text-2xl mt-8 mb-4 px-3">PRICE RANGE</h1>
          <PriceRange />
        </div>

        <div className="w-3/4">
          {categories &&
            categories.map((category: any) => {

              return (
                <>
                  <div key={category.categoryId}></div>
                  {Object.keys(category).length > 0 && (
                    <div>
                      <Products
                        categoryName={category.name}
                        products={
                          category[Object.keys(category)[0]].products !== null ? category[Object.keys(category)[0]].products : []
                        }
                        width={"90%"}
                        gap={false}
                      />
                    </div>
                  )}
                </>



              );
            })}
        </div>
      </div>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await CategoryAPI.getAllCategories();
    const categories: Category[] = await response.json();

    return {
      props: { categories: categories },
    };
  } catch (error: any) {
    return {
      props: { errCode: 500 },
    };
  }
};

export default Categories;
