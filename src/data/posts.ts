export interface Post {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  date: string;
  readingTime?: string;
  link: string;
  tags?: string[];
  external?: boolean;
}

export const posts: Post[] = [
  {
    slug: "movie-lens-data-analysis-using-pyspark",
    title: "Movie Lens Data Analysis Using PySpark [for beginners]",
    subtitle: "A beginner-friendly guide to performing MovieLens dataset analysis using Apache Spark & PySpark DataFrames.",
    description: "Apache Spark is widely used in big data analysis. A step-by-step tutorial performing data analysis on the MovieLens dataset using PySpark and DataFrames.",
    date: "Dec 20, 2019",
    readingTime: "5 min read",
    link: "https://nishantbahri.substack.com/p/movie-lens-data-analysis-using-pyspark-for-beginners-9c0f5f21eaf5?utm_source=profile&utm_medium=reader2",
    tags: ["PySpark", "Big Data", "Data Analysis", "Python"],
    external: true
  }
];
