import { PrismaClient } from "@prisma/client"

// initialize prismaClient
const prisma = new PrismaClient();

// getAll data products
export const getProducts = async (req, res, next) => {
    try {
        const response = await prisma.product.findMany();
        return res.status(200).json(response);
    } catch (e) {
        next(e)
    }
}

// get data product by id
export const getProductById = async (req, res, next) => {
    try {
        const response = await prisma.product.findUnique({
            where: {
                id: Number(req.params.id)
            }
        });
        return res.status(200).json(response);
    } catch (e) {
        next(e)
    }
}

// create data product
export const createProduct = async (req, res, next) => {
    try {
        const { name, price } = req.body;
        const response = await prisma.product.create({
            data: {
                name,
                price
            }
        });
        return res.status(201).json(response);
    } catch (e) {
        next(e)
    }
}

// update data product
export const updateProduct = async (req, res, next) => {
    try {
        const  { name, price} = req.body;
        const response = await prisma.product.update({
            where: {
                id: Number(req.params.id)
            },
            data: {
                name,
                price
            }
        });
        return res.status(200).json(response);
    } catch (e) {
        next(e)
    }
}

// delete data product
export const deleteProduct = async (req, res, next) => {
    try {
        const response = await prisma.product.delete({
            where: {
                id: Number(req.params.id)
            }
        });
    } catch (e) {
        next(e)
    }
}