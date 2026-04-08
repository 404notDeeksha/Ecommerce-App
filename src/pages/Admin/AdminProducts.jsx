import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  IconButton,
  CircularProgress,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Chip,
  Snackbar,
} from "@mui/material";
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import { getFilteredProducts } from "@api/products/index.js";
import { createProduct, updateProduct, deleteProduct } from "@api/admin/products.js";
import { useHasPermission, useUserRole } from "@hooks/useHasRole.js";
import { PERMISSIONS } from "@hooks/useHasRole.js";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [deleteProductId, setDeleteProductId] = useState(null);
  const [formData, setFormData] = useState({
    productName: "",
    productDescription: "",
    price: "",
    category: "",
    brand: "",
    stock: "",
    discount: "",
    images: [],
  });

  const canCreate = useHasPermission(PERMISSIONS.product.create);
  const canUpdate = useHasPermission(PERMISSIONS.product.update);
  const canDelete = useHasPermission(PERMISSIONS.product.delete);
  const userRole = useUserRole();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const result = await getFilteredProducts("");
      if (result.success) {
        setProducts(result.data || []);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      fetchProducts();
      return;
    }
    try {
      setLoading(true);
      const result = await getFilteredProducts(`search=${searchTerm}`);
      if (result.success) {
        setProducts(result.data || []);
      }
    } catch (err) {
      setError("Search failed");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        ...formData,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock) || 0,
        discount: parseFloat(formData.discount) || 0,
      };

      if (editProduct) {
        const result = await updateProduct(editProduct.productId, payload);
        if (result.success) {
          setSuccess("Product updated successfully");
          fetchProducts();
        }
      } else {
        const result = await createProduct(payload);
        if (result.success) {
          setSuccess("Product created successfully");
          fetchProducts();
        }
      }
      setFormOpen(false);
      resetForm();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDeleteConfirm = async () => {
    try {
      const result = await deleteProduct(deleteProductId);
      if (result.success) {
        setSuccess("Product deleted successfully");
        fetchProducts();
      }
      setDeleteProductId(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEdit = (product) => {
    setEditProduct(product);
    setFormData({
      productName: product.productName || "",
      productDescription: product.productDescription || "",
      price: product.price?.toString() || "",
      category: product.category || "",
      brand: product.brand || "",
      stock: product.stock?.toString() || "",
      discount: product.discount?.toString() || "",
      images: product.images || [],
    });
    setFormOpen(true);
  };

  const handleAddNew = () => {
    resetForm();
    setFormOpen(true);
  };

  const resetForm = () => {
    setEditProduct(null);
    setFormData({
      productName: "",
      productDescription: "",
      price: "",
      category: "",
      brand: "",
      stock: "",
      discount: "",
      images: [],
    });
  };

  const handleDelete = (productId) => {
    setDeleteProductId(productId);
  };

  const handleCloseSnackbar = () => {
    setError(null);
    setSuccess(null);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4" fontWeight="bold">
          Products Management
        </Typography>
        {canCreate && (
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleAddNew}
            sx={{ bgcolor: "#232F3E", "&:hover": { bgcolor: "#1a232f" } }}
          >
            Add Product
          </Button>
        )}
      </Box>

      <Box display="flex" gap={2} mb={3}>
        <TextField
          size="small"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          sx={{ width: 300 }}
        />
        <IconButton onClick={handleSearch} sx={{ bgcolor: "#f0f0f0" }}>
          <SearchIcon />
        </IconButton>
      </Box>

      <Chip label={`Role: ${userRole || "guest"}`} color="primary" size="small" sx={{ mb: 2 }} />

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Grid container spacing={3}>
        {products.length === 0 ? (
          <Grid item xs={12}>
            <Typography textAlign="center" color="text.secondary">
              No products found
            </Typography>
          </Grid>
        ) : (
          products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.productId}>
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.images?.[0] || "https://via.placeholder.com/300"}
                  alt={product.productName}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom noWrap>
                    {product.productName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}>
                    {product.productDescription}
                  </Typography>
                  <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                    <Typography variant="h6" color="primary">
                      ${product.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Stock: {product.stock || 0}
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between" mt={2}>
                    {canUpdate && (
                      <IconButton size="small" color="primary">
                        <EditIcon />
                      </IconButton>
                    )}
                    {canDelete && (
                      <IconButton size="small" color="error" onClick={() => handleDelete(product.productId)}>
                        <DeleteIcon />
                      </IconButton>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>

      <Dialog open={formOpen} onClose={() => { setFormOpen(false); resetForm(); }} maxWidth="sm" fullWidth>
        <DialogTitle>{editProduct ? "Edit Product" : "Add New Product"}</DialogTitle>
        <DialogContent>
          <Box display="flex" flexDirection="column" gap={2} mt={1}>
            <TextField
              label="Product Name"
              name="productName"
              value={formData.productName}
              onChange={handleInputChange}
              fullWidth
              required
            />
            <TextField
              label="Description"
              name="productDescription"
              value={formData.productDescription}
              onChange={handleInputChange}
              fullWidth
              multiline
              rows={3}
              required
            />
            <TextField
              label="Price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleInputChange}
              fullWidth
              required
            />
            <TextField
              label="Category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              fullWidth
              required
            />
            <TextField
              label="Brand"
              name="brand"
              value={formData.brand}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              label="Stock"
              name="stock"
              type="number"
              value={formData.stock}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              label="Discount (%)"
              name="discount"
              type="number"
              value={formData.discount}
              onChange={handleInputChange}
              fullWidth
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => { setFormOpen(false); resetForm(); }}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" sx={{ bgcolor: "#232F3E" }}>
            {editProduct ? "Update" : "Create"}
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={!!deleteProductId} onClose={() => setDeleteProductId(null)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this product? This action cannot be undone.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteProductId(null)}>Cancel</Button>
          <Button onClick={handleDeleteConfirm} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={!!error} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: "100%" }}>
          {error}
        </Alert>
      </Snackbar>

      <Snackbar open={!!success} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: "100%" }}>
          {success}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AdminProducts;