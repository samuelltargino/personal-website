// useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsTheHeaderFixed(entry.isIntersecting);
//       },
//       { rootMargin: "-300px" }
//     );

//     headerRef.current && observer.observe(headerRef.current);
//   }, []);

window.addEventListener("scroll", () => {
  const scrollPosition = window.pageYOffset;
  console.log(scrollPosition);
  if (scrollPosition > windowTopDistance && isTheHeaderFixed) {
    setHeaderClassName("fixed-hidden");
    setWindowTopDistance(scrollPosition);
  } else if (scrollPosition < windowTopDistance && isTheHeaderFixed) {
    setHeaderClassName("fixed");
    setWindowTopDistance(scrollPosition);
  } else if (scrollPosition < windowTopDistance && !isTheHeaderFixed) {
    setHeaderClassName("default");
    setWindowTopDistance(scrollPosition);
  }
});
