import { environment } from "../../../environments/environment.development";

const domain = environment.domain
export const API_URLS = {
    getAllProducts: `${domain}/products`,
    getProductById: (id: number) => `${domain}/products/${id}`,
    filterProductsBytitle: (title: string) => `${domain}/products/?title=${title}`,
    login: `${domain}/auth/login`,


} ;