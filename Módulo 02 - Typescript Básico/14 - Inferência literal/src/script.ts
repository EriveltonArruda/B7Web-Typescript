function fazerRequisicao(url: string, method: "GET" | "POST") {
  //.......
}

type Methods = "GET" | "POST";

let url = "https://google.com.br";
let method: Methods = "GET";

method = "blablabla"; // não é reatribuída

fazerRequisicao(url, method);

///// Usando em Objetos
type RequestDetails = {
  url: string;
  method: "GET" | "POST";
};

let req: RequestDetails = {
  url: "https://google.com.br",
  method: "GET",
};

fazerRequisicao(req.url, req.method);
