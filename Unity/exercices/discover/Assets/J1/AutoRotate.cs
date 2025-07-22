using UnityEngine;

public class turnAround : MonoBehaviour
{
    [SerializeField] private Vector3 mRotation;
    void Update()
    {
        transform.Rotate(mRotation * Time.deltaTime);
    }
}
