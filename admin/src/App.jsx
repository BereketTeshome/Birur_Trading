import { useState } from "react";
import { api } from "./api";
import ProductManager from "./components/ProductManager";

function App() {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);

    await api.post("/cereals", formData);

    alert("Product uploaded ☕");
    window.location.reload();

    setName("");
    setImage(null);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#3b2418,#6f4e37)",
        padding: "50px 8%",
        fontFamily: "Poppins",
      }}
    >
      {/* Header */}

      <div style={{ marginBottom: 40 }}>
        <h1
          style={{
            fontFamily: "Playfair Display",
            fontSize: 48,
            color: "white",
            marginBottom: 5,
          }}
        >
          Birur Trading
        </h1>

        <p style={{ color: "#e5d3c5" }}>Coffee & Cereal Export Management</p>
      </div>

      {/* Upload Card */}

      <div
        style={{
          background: "white",
          padding: 30,
          borderRadius: 16,
          maxWidth: 500,
          marginBottom: 50,
          boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
        }}
      >
        <h3 style={{ marginBottom: 20 }}>Add Product</h3>

        <form onSubmit={submit}>
          <input
            type="text"
            placeholder="Product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{
              width: "100%",
              padding: 14,
              borderRadius: 10,
              border: "1px solid #ddd",
              marginBottom: 15,
            }}
          />

          <input
            type="file"
            accept="image/*,video/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
            style={{ marginBottom: 20 }}
          />

          <button
            type="submit"
            style={{
              background: "#6f4e37",
              color: "white",
              padding: "12px 22px",
              border: "none",
              borderRadius: 10,
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Upload Product
          </button>
        </form>
      </div>

      <ProductManager refresh={refresh} setRefresh={setRefresh} />
    </div>
  );
}

export default App;
