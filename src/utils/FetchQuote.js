export const fetchQuote = async (setQuote) => {


    await fetch('https://quotes.rest/qod?language=en')
        .then((res) => res.json())
        .then((data) => {
            const obj = {
                quote: (data.contents.quotes[0].quote),
                author: (data.contents.quotes[0].author)
            }
            setQuote(obj);
        }
        );

}
//quote = (data.contents.quotes[0].quote)
//author = (data.contents.quotes[0].author)