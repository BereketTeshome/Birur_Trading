import { useEffect, useState } from "react";
import { api } from "../api";

function ProductManager({ refresh, setRefresh }) {
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);

  const fetchProducts = async () => {
    const res = await api.get("/cereals");
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, [refresh]);

  const deleteProduct = async (id) => {
    if (!window.confirm("Delete product?")) return;

    try {
      await api.delete(`/cereals/${id}`);
      window.location.reload();
    } catch (error) {
      console.error("Delete error:", error);
      window.location.reload();
    }
  };

  const startEdit = (item) => {
    setEditing(item.id);
    setName(item.name);
    setFile(null);
  };

  const updateProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);

    if (file) {
      formData.append("image", file);
    }

    try {
      await api.put(`/cereals/${editing}`, formData);
      window.location.reload();
    } catch (error) {
      console.error("Update error:", error);
      window.location.reload();
    }
  };

  return (
    <div>
      <h2
        style={{
          color: "white",
          marginBottom: 25,
          fontFamily: "Playfair Display",
        }}
      >
        Products
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))",
          gap: 25,
        }}
      >
        {products.map((item) => (
          <div
            key={item.id}
            style={{
              background: "white",
              borderRadius: 14,
              overflow: "hidden",
              boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
            }}
          >
            {item.media?.endsWith(".mp4") ? (
              <video width="100%" controls>
                <source src={`https://birurtrading.com${item.media}`} />
              </video>
            ) : (
              <img
                src={`https://birurtrading.com${item.media}`}
                alt=""
                style={{
                  width: "100%",
                  height: 200,
                  objectFit: "cover",
                }}
              />
            )}

            <div style={{ padding: 18 }}>
              {editing === item.id ? (
                <form onSubmit={updateProduct}>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: "100%",
                      padding: 10,
                      borderRadius: 8,
                      border: "1px solid #ccc",
                      marginBottom: 8,
                    }}
                  />

                  <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    style={{ marginBottom: 10 }}
                  />

                  <button
                    style={{
                      background: "#6f4e37",
                      color: "white",
                      border: "none",
                      padding: "8px 14px",
                      borderRadius: 8,
                      cursor: "pointer",
                    }}
                  >
                    Save
                  </button>
                </form>
              ) : (
                <>
                  <h3
                    style={{
                      marginBottom: 12,
                      fontWeight: 600,
                    }}
                  >
                    {item.name}
                  </h3>

                  <div style={{ display: "flex", gap: 10 }}>
                    <button
                      onClick={() => startEdit(item)}
                      style={{
                        background: "#d4a373",
                        border: "none",
                        padding: "8px 14px",
                        borderRadius: 8,
                        cursor: "pointer",
                      }}
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteProduct(item.id)}
                      style={{
                        background: "#b91c1c",
                        color: "white",
                        border: "none",
                        padding: "8px 14px",
                        borderRadius: 8,
                        cursor: "pointer",
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductManager;
