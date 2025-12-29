import { Observable } from "rxjs";

class ApiService {
  constructor() {
    this.apiUrl = "https://api.example.com/news";
  }

  getNewsArticles() {
    // Return an observable that emits API response
    return new Observable((observer) => {
      fetch(this.apiUrl)
        .then((response) => response.json())
        .then((data) => {
          observer.next(data); // Emit the data
          observer.complete(); // Complete the observable
        })
        .catch((error) => observer.error(error)); // Handle errors
    });
  }
}

export default ApiService;
