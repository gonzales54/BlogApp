import Link from "next/link";
import style from "./CategoryButton.module.scss";
import ICategory from "@/types/CategoryInterface";
import { roboto } from "@/utility/font";

export default function CategoryButton({
  categories,
}: {
  categories: ICategory[];
}) {
  return (
    <div className={style.container}>
      <h2 className={style.categoryButtonTitle}>Category List</h2>
      <ul className={style.categoryButtonCotainer}>
        {categories.length
          ? categories.map((category: ICategory) => {
              return (
                <li
                  className={style.categoryButton}
                  key={category._id.toString()}
                >
                  <Link
                    href=""
                    className={`${roboto.className} ${style.categoryButtonLink}`}
                  >
                    #{category.category}
                  </Link>
                </li>
              );
            })
          : "No Categories"}
      </ul>
    </div>
  );
}
