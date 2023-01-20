import { httpError } from "../helpers/httpError.js";
import { productsHC } from '../mocks/products.js'

export const getAll = (_req, res) => {
    try {
        res.render('pages/index', { title: 'listado de productos', products: productsHC, oneProduct: false });

    } catch (error) {
        httpError(res, error)
    }
}

export const getById = (req, res) => {
    try {
        const { id } = req.params
        const product = productsHC.find(e => e.id == id)
        res.render('pages/oneProduct', { title: 'Producto seleccionado', item: product, oneProduct: true });

    } catch (error) {
        httpError(res, error)
    }
}

export const createNewProduct = (req, res) => {
    try {
        let maxId
        const product = req.body;
        product.price = parseFloat(product.price);
        const ids = productsHC.map(prod => prod.id)
        const emptyId = ids.length === 0;
        emptyId ? maxId = 0 : maxId = Math.max(...ids)
        const newProduct = {
            id: maxId + 1,
            title: product.title,
            price: product.price,
            thumbnail: product.thumbnail,
        }
        productsHC.push(newProduct)

        res.redirect(301, '/products')
    } catch (error) {
        httpError(res, error)
    }


}

export const editById = (req, res) => {
    try {
        const { body } = req
        const id = body.id
        productsHC.find(e => {
            if (e.id === Number(id)) {
                (body.title !== '') && (e.title = body.title);
                (body.price !== '') && (e.price = parseFloat(body.price));
                (body.thumbnail !== '') && (e.thumbnail = body.thumbnail);
            }
        })
        res.render('pages/index', { title: 'listado de productos', products: productsHC });

    } catch (error) {
        httpError(res, error)
    }
}

export const deleteById = (req, res) => {
    try {

        let { id } = req.params;
        let position;
        productsHC.forEach((element, key) => {
            if (element.id === Number(id)) {
                position = key
            }
        });
        if (position > 0) {
            productsHC.splice(position, position)
        } else if (position <= 0) {
            productsHC.splice(0, productsHC.length)

        }

        res.render('pages/index', { title: 'listado de productos', products: productsHC });

    } catch (error) {
        httpError(res, error)
    }
}

export const getForm = (req, res) => {
    try {

        res.render('pages/form', { title: 'Formulario para agregar producto', oneProduct: false });

    } catch (error) {
        httpError(res, error)
    }
}

export const getFormEdit = (req, res) => {
    try {

        res.render('pages/edit', { title: `Edita el producto ID ${req.params.id}`, products: productsHC, id: req.params.id });

    } catch (error) {
        httpError(res, error)
    }
}